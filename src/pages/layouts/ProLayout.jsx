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
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent";
import { TopicMapContextProvider } from "react-cismap/contexts/TopicMapContextProvider";
import ProCard from "@ant-design/pro-card";
import { css } from "@emotion/css";

// import Layout from "virtual:antd-layout";

//import "react-cismap/topicMaps.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "leaflet/dist/leaflet.css";
// import "react-bootstrap-typeahead/css/Typeahead.css";
import { Button, DatePicker, Space, version, Divider, Dropdown, Input } from "antd";
// import "antd/dist/reset.css";

import { PageContainer, ProLayout, SettingDrawer } from "@ant-design/pro-layout";

import { useEffect } from "react";
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
  const { basepath, config } = props;
  const [count, setCount] = useState(0);
  const [settings, setSetting] = useState({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
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

  return (
    <div id="test-pro-layout" className="App">
      <ProLayout
        bgLayoutImgList={[]}
        {...config}
        location={{
          pathname,
        }}
        siderMenuType="group"
        menu={{
          collapsedShowGroupTitle: true,
        }}
        avatarProps={{
          src: "https://cismet.de/images/personal/thorsten.jpg",
          size: "small",
          title: "Settings",
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
        // headerTitleRender={(logo, title, _) => {
        //   const defaultDom = (
        //     <a>
        //       {logo}
        //       {title}
        //     </a>
        //   );
        //   if (document.body.clientWidth < 1400) {
        //     return defaultDom;
        //   }
        //   if (_.isMobile) return defaultDom;
        //   return (
        //     <>
        //       {defaultDom}
        //       <div
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //         }}
        //       >
        //         <Divider
        //           style={{
        //             height: "1.5em",
        //           }}
        //           type="vertical"
        //         />
        //         <Dropdown
        //           placement="bottom"
        //           overlay={
        //             <div
        //               style={{
        //                 padding: "32px 40px",
        //                 backgroundColor: "#fff",
        //                 width: "calc(100vw - 4px)",
        //                 height: "307px",
        //                 boxShadow:
        //                   "0 8px 16px 0 rgba(0,0,0,0.03), 0 4px 8px 0 rgba(25,15,15,0.07), 0 2px 4px 0 rgba(0,0,0,0.08)",
        //                 borderRadius: "0 0 6px 6px",
        //               }}
        //             >
        //               <div style={{ display: "flex" }}>
        //                 <div style={{ flex: 1 }}>
        //                   <List title="Listtitle" />
        //                   <List
        //                     title="Listtitle2"
        //                     style={{
        //                       marginBlockStart: 32,
        //                     }}
        //                   />
        //                 </div>

        //                 <div
        //                   style={{
        //                     width: "308px",
        //                     borderInlineStart: "1px solid rgba(0,0,0,0.06)",
        //                     paddingInlineStart: 16,
        //                   }}
        //                 >
        //                   <div
        //                     className={css`
        //                       font-size: 14px;
        //                       color: rgba(0, 0, 0, 0.45);
        //                       line-height: 22px;
        //                     `}
        //                   >
        //                     Another List
        //                   </div>
        //                   {new Array(3).fill(1).map((name, index) => {
        //                     return (
        //                       <div
        //                         key={index}
        //                         className={css`
        //                           border-radius: 4px;
        //                           padding: 16px;
        //                           margin-top: 4px;
        //                           display: flex;
        //                           cursor: pointer;
        //                           &:hover {
        //                             background-color: rgba(0, 0, 0, 0.03);
        //                           }
        //                         `}
        //                       >
        //                         <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
        //                         <div
        //                           style={{
        //                             marginInlineStart: 14,
        //                           }}
        //                         >
        //                           <div
        //                             className={css`
        //                               font-size: 14px;
        //                               color: rgba(0, 0, 0, 0.85);
        //                               line-height: 22px;
        //                             `}
        //                           >
        //                             Ant Design
        //                           </div>
        //                           <div
        //                             className={css`
        //                               font-size: 12px;
        //                               color: rgba(0, 0, 0, 0.45);
        //                               line-height: 20px;
        //                             `}
        //                           >
        //                             More famous UI design languages in Hangzhou
        //                           </div>
        //                         </div>
        //                       </div>
        //                     );
        //                   })}
        //                 </div>
        //               </div>
        //             </div>
        //           }
        //         >
        //           <div
        //             style={{
        //               color: "rgba(0, 0, 0, 0.85)",
        //               fontWeight: 500,
        //               cursor: "pointer",
        //               display: "flex",
        //               gap: 4,
        //               paddingInlineStart: 8,
        //               paddingInlineEnd: 12,
        //               alignItems: "center",
        //             }}
        //             className={css`
        //               &:hover {
        //                 background-color: rgba(0, 0, 0, 0.03);
        //               }
        //             `}
        //           >
        //             <span>Enterprise Asset Center</span>
        //             <CaretDownFilled />
        //           </div>
        //         </Dropdown>
        //       </div>
        //     </>
        //   );
        // }}
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
        // breadcrumbRender={(breadcrumbs = []) => {
        //   //return []; //disable breadcrumbs beacause they link to non hashed history
        //   console.log("breadcrumbs", breadcrumbs);
        //   breadcrumbs.map((breadcrumb, index) => {
        //     const itempath = breadcrumb.path.replace(/^\//, "");
        //     breadcrumb.path = basepath + "/" + itempath;
        //     return breadcrumb;
        //   });
        // }}
        itemRender={(route, params, routes, paths) => {
          const last = routes.indexOf(route) === routes.length - 1;
          //return paths.join("/");
          return last ? (
            <span>{route.breadcrumbName}</span>
          ) : (
            <Link to={basepath + "/" + paths.join("/")}>{route.breadcrumbName}</Link>
          );
        }}
        {...settings}
      >
        <div style={{ _border: "1px solid blue", zIndex: 10, marginTop: 0 }}>
          <Outlet />
        </div>

        <SettingDrawer
          pathname={pathname}
          enableDarkTheme
          getContainer={() => document.getElementById("test-pro-layout")}
          settings={settings}
          onSettingChange={(changeSetting) => {
            setSetting(changeSetting);
          }}
          disableUrlParams={true}
        />
      </ProLayout>
    </div>
  );
}

export default App;
