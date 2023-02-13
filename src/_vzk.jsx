import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/cismetlogo.svg";
const config = {
  title: "Verkehrszeichenkataster",
  logo: logo,
  loginBackground: "/assets/login/anatol-rurac-XM776JMGLoY-unsplash.jpg",

  layout: "mix",
  splitMenus: true,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#13C2C2",
  route: {
    routes: [
      {
        path: "",

        icon: <SmileFilled />,
        component: <div>Home</div>,
      },

      {
        path: "/welcome",
        name: "Welcome",
        icon: <SmileFilled />,
        component: "Xtest",
      },
      {
        path: "/subpageLayouts",
        name: "Subpage Layouts",
        icon: <CrownFilled />,
        access: "canAdmin",
        _component: <div style={{ border: "1px solid red", height: "100vh" }}>Layout Examples</div>,
        redirect: "/subpageLayouts/abstract",
        routes: [
          {
            path: "/subpageLayouts/abstract",
            name: "Abstract",
            icon: <CrownFilled />,
            component: <div>redirect</div>,
            redirect: "/subpageLayouts/abstract/withoutFooter",
            routes: [
              {
                path: "withoutFooter",
                name: "WO Footer",
                icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
                component: "layouts/abstract/WithoutFooter",
              },
              {
                path: "withoutHeaderActions",
                name: "WO Header Actions",
                icon: <CrownFilled />,
                component: "layouts/abstract/WithoutHeaderActions",
              },
              {
                path: "withFooterAndHeader",
                name: "With Both",
                icon: <CrownFilled />,
                component: "layouts/abstract/WithFooterAndHeader",
              },
              {
                path: "emptyPageContainer",
                name: "Empty PC",
                icon: <CrownFilled />,
                component: "layouts/abstract/EmptyPageContainer",
              },
              {
                path: "noPageContainer",
                name: "No PC",
                icon: <CrownFilled />,
                component: "layouts/abstract/NoPageContainer",
              },
              {
                path: "noPageContainerFS",
                name: "No PC (Full Size)",
                icon: <CrownFilled />,
                component: "layouts/abstract/FullSizeNoPageContainer",
              },
              {
                path: "pageContainerFS",
                name: "PC (Full Size)",
                icon: <CrownFilled />,
                component: "layouts/abstract/FullSizeWithPageContainer",
              },
            ],
          },
          {
            path: "/subpageLayouts/empty",
            name: "Empty Templates",
            icon: <CrownFilled />,
            redirect: "/subpageLayouts/empty/dashboard",

            routes: [
              {
                path: "dashboard",
                name: "Dashboard",
                icon: <CrownFilled />,
                component: "layouts/empty/Dashboard",
              },
              {
                path: "mapList",
                name: "Map & List",
                icon: <CrownFilled />,
                component: "layouts/empty/MapList",
              },
              {
                path: "docsAndForms",
                name: "Docs & Forms",
                icon: <CrownFilled />,
                component: "layouts/empty/DocsAndForms",
              },
              {
                path: "tableSupportingListMap",
                name: "Table & List,Map",
                icon: <CrownFilled />,
                component: "layouts/empty/TableSupportingListMap",
              },
              {
                path: "tableMapListsForm",
                name: "Table & Map + List & Forms",
                icon: <CrownFilled />,
                component: "layouts/empty/TableMapListsForm",
              },
              {
                path: "tableSupportingFormMap",
                name: "Table + Form & Map",
                icon: <CrownFilled />,
                component: "layouts/empty/TableSupportingFormMap",
              },
              {
                path: "single",
                name: "Single",
                icon: <CrownFilled />,
                component: "layouts/empty/Single",
              },
              {
                path: "graph",
                name: "Graph & Settings",
                icon: <CrownFilled />,
                component: "layouts/empty/GraphWithSettingsForms",
              },
            ],
          },
        ],
      },
      {
        path: "/examples",
        name: "Examples",
        icon: <CrownFilled />,
        redirect: "/examples/dashboard",

        component: <div style={{ border: "1px solid red", height: "100vh" }}>Layout Examples</div>,
        routes: [
          {
            path: "dashboard",
            name: "Dashboard",
            icon: <CrownFilled />,
            component: "layouts/mocks/Dashboard",
          },
          {
            path: "mapList",
            name: "Map & List",
            icon: <CrownFilled />,
            component: "layouts/mocks/MapList",
          },
          {
            path: "docsAndForms",
            name: "Docs & Forms & Notes",
            icon: <CrownFilled />,
            component: "layouts/mocks/DocsAndForms",
          },
          {
            path: "tableSupportingListMap",
            name: "Table & List,Map",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableSupportingListMap",
          },
          {
            path: "tableMapListsForm",
            name: "Table & Map + List & Forms",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableMapListsForm",
          },
          {
            path: "tableSupportingFormMap",
            name: "Table + Form & Map",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableSupportingFormMap",
          },
          {
            path: "docs",
            name: "Docs",
            icon: <CrownFilled />,
            component: "layouts/mocks/OnlyDocs",
          },
          {
            path: "graph",
            name: "Graph & Settings",
            icon: <CrownFilled />,
            component: "layouts/mocks/GraphWithSettingsForms",
          },
          {
            path: "largetable",
            name: "Large Table",
            icon: <CrownFilled />,
            component: "layouts/mocks/LargeTable",
          },
          {
            path: "designer",
            name: "Designer",
            icon: <CrownFilled />,
            component: "layouts/mocks/Designer",
          },
          {
            path: "timeline",
            name: "Timeline",
            icon: <CrownFilled />,
            component: "layouts/mocks/Timeline",
          },
          {
            path: "calendar",
            name: "Calendar",
            icon: <CrownFilled />,
            component: "layouts/mocks/Calendar",
          },
          {
            path: "fullsizeMap",
            name: "Fullsize Map",
            icon: <CrownFilled />,
            component: "layouts/mocks/FullsizedMap",
          },
          {
            path: "unfinisheddashboard",
            name: "Loading Dashboard",
            icon: <CrownFilled />,
            component: "layouts/mocks/Multi",
          },
        ],
      },
      {
        name: "List",
        icon: <TabletFilled />,
        path: "/list",
        component: <div>/ListTableList</div>,
        routes: [
          {
            path: "/list/sub-page",
            name: "Sub-page",
            icon: <CrownFilled />,
            component: <div>list/sub-page</div>,
            routes: [
              {
                path: "sub-sub-page1",
                name: "sub-sub-page1",
                icon: <CrownFilled />,
                component: <div>/ListTableList-sub-sub-page1</div>,
              },
              {
                path: "sub-sub-page2",
                name: "sub-sub-page2",
                icon: <CrownFilled />,
                component: <div>/ListTableList-sub-sub-page2</div>,
              },
              {
                path: "sub-sub-page3",
                name: "sub-sub-page3",
                icon: <CrownFilled />,
                component: <div>/ListTableList-sub-sub-page3</div>,
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "/list/sub-page2",
            icon: <CrownFilled />,
            component: <div>/ListTableList-sub-page2</div>,
          },
          {
            path: "/list/sub-page3",
            name: "/list/sub-page3",
            icon: <CrownFilled />,
            component: <div>/ListTableList-sub-page3</div>,
          },
        ],
      },
      // {
      //   path: "https://ant.design",
      //   name: "Ant Design ",
      //   icon: <ChromeFilled />,
      // },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default config;
