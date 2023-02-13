import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/verdis.png";
const config = {
  title: "VerDIS",
  logo: logo,
  loginBackground: "/assets/login/nicolas-brown-233011-unsplash.jpg",

  layout: "mix",
  splitMenus: true,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#EB7549",
  siderMenuType: "group",

  route: {
    routes: [
      {
        path: "",

        icon: <SmileFilled />,
        component: "layouts/mocks/Dashboard",
      },

      {
        path: "/versiegelteflaechen",
        name: "Versiegelte Flächen",
        icon: <CrownFilled />,
        redirect: "/versiegelteflaechen/uebersicht",

        component: <div style={{ border: "1px solid red", height: "100vh" }}>Layout Examples</div>,
        routes: [
          {
            path: "uebersicht",
            name: "Übersicht",
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
        path: "/strassenreinigung",
        name: "Straßenreinigung",
        icon: <CrownFilled />,
        redirect: "/strassenreinigung/uebersicht",

        component: <div style={{ border: "1px solid red", height: "100vh" }}>Layout Examples</div>,
        routes: [
          {
            path: "uebersicht",
            name: "Übersicht",
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
        path: "/versickerung",
        name: "Versickerung",
        icon: <CrownFilled />,
        component: "layouts/mocks/Dashboard",
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default config;
