import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/cismetlogo.svg";
const config = {
  title: "cismap-connect",
  logo: logo,

  layout: "top",
  splitMenus: false,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#2F54EB",
  route: {
    routes: [
      {
        path: "",

        icon: <SmileFilled />,
        component: "layouts/mocks/FullsizedMap",
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default config;
