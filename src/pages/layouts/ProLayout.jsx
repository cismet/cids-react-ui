import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "@/App.css";
import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { css } from "@emotion/css";
import { theme } from "antd";

// import Layout from "virtual:antd-layout";

//import "react-cismap/topicMaps.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "leaflet/dist/leaflet.css";
// import "react-bootstrap-typeahead/css/Typeahead.css";
import { Button, DatePicker, Space, version, Divider, Dropdown, Input, ConfigProvider } from "antd";

import { PageContainer, ProLayout, SettingDrawer } from "@ant-design/pro-layout";

import { useEffect } from "react";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { ThemeSetterContext } from "@/App";
// import enUS from "antd/locale/en_US";
// import enUSProComponents from "@ant-design/pro-provider/lib/locale/en_US";

const Item = (props) => (
  <div
    className={css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      cursor: pointer;
      line-height: 22px;
      margin-bottom: 8px;
      &:hover {
        color: #1890ff;
      }
    `}
    style={{
      width: "33.33%",
    }}
  >
    {props.children}
    <DoubleRightOutlined
      style={{
        marginInlineStart: 4,
      }}
    />
  </div>
);

const List = (props) => {
  return (
    <div
      style={{
        width: "100%",
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: "rgba(0,0,0,0.85)",
          lineHeight: "24px",
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>Item-{index}</Item>;
        })}
      </div>
    </div>
  );
};

function App(props) {
  const { basepath, config, setTheme } = props;
  const [count, setCount] = useState(0);
  const { useToken } = theme;
  useEffect(() => {
    setTheme({
      ...token,
      ...{
        token: {
          colorPrimary: config.colorPrimary,
        },
      },
    });
  }, []);
  const { token } = useToken();
  const defaultSettingsFromConfig = {
    fixSiderbar: props.config.fixSiderbar,
    layout: props.config.layout,
    splitMenus: props.config.splitMenus,
    navTheme: props.config.navTheme,
    contentWidth: props.config.contentWidth,
    colorPrimary: props.config.colorPrimary,
  };

  const [settings, setSetting] = useState({
    ...defaultSettingsFromConfig,
    // fixSiderbar: true,
    // layout: "mix",
    // splitMenus: true,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const [pathname, setPathname] = useState(location?.pathname || "/"); // this
  useEffect(() => {
    // if (pathname !== location?.pathname) {
    //strip the basepath at the beginning of location?.pathname

    const strippedPathname = location?.pathname.replace(basepath, "");

    setPathname(strippedPathname);
    // }
    console.log("xxx location", location?.pathname);
  }, [location, pathname]);

  const customItemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <a onClick={() => customFunction(route)}>{route.breadcrumbName}</a>
    );
  };
  console.log("prolayout settings", settings?.colorPrimary);
  console.log("prolayout themesettings", token?.colorPrimary);

  return (
    <div id="test-pro-layout" className="App">
      <ProLayout
        bgLayoutImgList={[]}
        siderMenuType="group"
        menu={{
          collapsedShowGroupTitle: true,
        }}
        avatarProps={{
          src: "https://cismet.de/images/personal/thorsten.jpg",
          size: "small",
          title: "Settings",
        }}
        {...config}
        {...settings}
        location={{
          pathname,
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== "side" && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: "rgba(0,0,0,0.03)",
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0, 0, 0, 0.15)",
                      }}
                    />
                  }
                  placeholder="Search"
                  bordered={false}
                />
                <PlusCircleFilled
                  style={{
                    color: "var(--ant-primary-color)",
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
            <LogoutOutlined
              onClick={() => {
                navigate(basepath + "/login");
              }}
              key="logout"
            />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: "center",
                paddingBlockStart: 12,
              }}
            >
              <div>© 2023 Made with ❤️</div>
              <div>by cismet.de</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => {
          console.log(e);
          navigate(basepath);
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              console.log("xxx menuIte,click", item.path);

              //strip leading slash of item.ath into itempath
              const itempath = item.path.replace(/^\//, "");

              navigate(basepath + "/" + itempath || basepath + "/" + "welcome");
              setPathname(itempath || basepath + "/" + "welcome");
            }}
          >
            {dom}
          </div>
        )}
        subMenuItemRender={(item, dom) => (
          <div
            onClick={() => {
              //strip leading slash of item.ath into itempath
              const itempath = item.path.replace(/^\//, "");
              navigate(basepath + "/" + itempath || basepath + "/" + "/welcome");
              setPathname(itempath || basepath + "/" + "/welcome");
            }}
          >
            {dom}
          </div>
        )}
        itemRender={(route, params, routes, paths) => {
          const last = routes.indexOf(route) === routes.length - 1;
          //return paths.join("/");
          return last ? (
            <span>{route.breadcrumbName}</span>
          ) : (
            <Link to={basepath + "/" + paths.join("/")}>{route.breadcrumbName}</Link>
          );
        }}
        // {...settings}
      >
        <div style={{ _border: "1px solid blue", zIndex: 10, marginTop: 0 }}>
          <Outlet />
        </div>
        {/* <ThemeSetterContext.Consumer> */}
        <SettingDrawer
          pathname={pathname}
          enableDarkTheme
          getContainer={() => document.getElementById("test-pro-layout")}
          settings={settings}
          onSettingChange={(changeSetting) => {
            setSetting(changeSetting);
            setTheme({
              token: {
                colorPrimary: changeSetting.colorPrimary,
              },
            });
          }}
          disableUrlParams={true}
        />
        {/* </ThemeSetterContext.Consumer> */}
      </ProLayout>
    </div>
  );
}

export default App;
