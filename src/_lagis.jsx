import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/lagis.png";
const config = {
  title: "LagIS",
  logo: logo,
  loginBackground: "/assets/login/simon-wierzba-4N0uFUstIJk-unsplash.jpg",

  route: {
    routes: [
      {
        path: "/",

        icon: <SmileFilled />,

        redirect: "/examples/dashboard",
      },

      {
        path: "/examples",
        name: "Menü",
        icon: <CrownFilled />,
        redirect: "/examples/dashboard",

        component: <div style={{ border: "1px solid red", height: "100vh" }}>Layout Examples</div>,
        routes: [
          {
            path: "dashboard",
            name: "Übersicht",
            icon: <CrownFilled />,
            component: "layouts/mocks/Dashboard",
          },
          {
            path: "tableSupportingFormMap",
            name: "Verwaltungsbereiche",
            icon: <CrownFilled />,
            component: "layouts/mocks/TableSupportingFormMap",
          },

          {
            path: "mapList",
            name: "Miet- und Pachtverträge",
            icon: <CrownFilled />,
            component: "layouts/mocks/MapList",
          },
          {
            path: "mapList",
            name: "Rechte und Belastungen",
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
