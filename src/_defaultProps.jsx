import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/cismetlogo.svg";
const config = {
  title: "cids-react-ui",
  logo: logo,
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
            name: "✅ Dashboard",
            icon: <CrownFilled />,
            component: "layouts/mocks/Dashboard",
          },
          {
            path: "mapList",
            name: "✅ Map & List",
            icon: <CrownFilled />,
            component: "layouts/mocks/MapList",
          },
          {
            path: "docsAndForms",
            name: "Docs & Forms",
            icon: <CrownFilled />,
            component: "layouts/mocks/DocsAndForms",
          },
          {
            path: "tableSupportingListMap",
            name: "✅ Table & List,Map",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableSupportingListMap",
          },
          {
            path: "tableMapListsForm",
            name: "✅ Table & Map + List & Forms",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableMapListsForm",
          },
          {
            path: "tableSupportingFormMap",
            name: "✅ Table + Form & Map",
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
            name: "✅ Graph & Settings",
            icon: <CrownFilled />,
            component: "layouts/mocks/GraphWithSettingsForms",
          },
          {
            path: "largetable",
            name: "✅ Large Table",
            icon: <CrownFilled />,
            component: "layouts/mocks/LargeTable",
          },
          {
            path: "designer",
            name: "✅ Designer",
            icon: <CrownFilled />,
            component: "layouts/mocks/Designer",
          },
          {
            path: "timeline",
            name: "✅ Timeline",
            icon: <CrownFilled />,
            component: "layouts/mocks/Timeline",
          },
          {
            path: "fullsizeMap",
            name: "✅ Fullsize Map",
            icon: <CrownFilled />,
            component: "layouts/mocks/FullsizedMap",
          },
          {
            path: "olddashboard",
            name: "✅ Old Dashboard",
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
  appList: [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "Ant Design",
      desc: "杭州市较知名的 UI 设计语言",
      url: "https://ant.design",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
      title: "AntV",
      desc: "蚂蚁集团全新一代数据可视化解决方案",
      url: "https://antv.vision/",
      target: "_blank",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
      title: "Pro Components",
      desc: "专业级 UI 组件库",
      url: "https://procomponents.ant.design/",
    },
    {
      icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
      title: "umi",
      desc: "插件化的企业级前端应用框架。",
      url: "https://umijs.org/zh-CN/docs",
    },

    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
      title: "qiankun",
      desc: "可能是你见过最完善的微前端解决方案🧐",
      url: "https://qiankun.umijs.org/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
      title: "语雀",
      desc: "知识创作与分享工具",
      url: "https://www.yuque.com/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
      title: "Kitchen ",
      desc: "Sketch 工具集",
      url: "https://kitchen.alipay.com/",
    },
    {
      icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
      title: "dumi",
      desc: "为组件开发场景而生的文档工具",
      url: "https://d.umijs.org/zh-CN",
    },
  ],
};

export default config;
