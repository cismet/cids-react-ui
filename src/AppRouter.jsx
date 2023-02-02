import { HashRouter as Router, Routes, Navigate, Route, Link, useNavigate } from "react-router-dom";
import Login from "@/pages/Login";
import ProLayout from "@/pages/layouts/ProLayout";
import loadable from "@loadable/component";
import Fragment from "react";
import config from "@/_defaultProps";

const renderRoutes = (basepath, routes, parentPath) => {
  const r = routes.map((route) => {
    let path;
    if (route.path[0] === "/") {
      path = route.path.slice(1);
    } else {
      if (parentPath) {
        path = `${parentPath}/${route.path}`.slice(1);
      } else {
        path = route.path;
      }
    }
    // path = route.path;

    // check whether the route.component is a string or a react component
    let component;
    if (route.redirect !== undefined) {
      component = <Navigate to={basepath + route.redirect} />;
    } else if (typeof route.component === "string") {
      const fullPath = "./pages/subpages/" + route.component; //unfortunately a relative path is required. so no @ alias
      const DynamicComponent = loadable(() => import(fullPath));
      component = <DynamicComponent />;
    } else {
      component = route.component;
    }

    let result;
    if (route.routes) {
      result = [
        <Route key={path} path={path} element={component} />,
        ...renderRoutes(basepath, route.routes, "/" + path), //add a leading / because it was removed above
      ];
    } else {
      result = <Route key={path} path={path} element={component} />;
    }
    return result;
  });
  if (parentPath === undefined) {
  }
  return r;
};
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/demo" />} />
      <Route path="/demo" element={<ProLayout basepath="/demo" config={config} />}>
        {renderRoutes("/demo", config.route.routes)}
      </Route>
      <Route path="/demo/login" element={<Login basepath="/demo" />} />
    </Routes>
  );
};
export default AppRouter;
