import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClockRotateLeft,
  faDashboard,
  faDroplet,
  faEnvelope,
  faFilePdf,
  faFileText,
  faFolderOpen,
  faGavel,
  faList,
  faMap,
  faMoneyBill,
  faPenRuler,
  faPieChart,
  faRoad,
  faTable,
  faThumbsUp,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/cismetlogo.svg";
const config = {
  title: "Verkehrszeichenkataster",
  logo: logo,
  loginBackground: "/assets/login/anatol-rurac-XM776JMGLoY-unsplash.jpg",

  siderMenuType: "sub",
  layout: "mix",
  splitMenus: true,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#13C2C2",
  route: {
    routes: [
      {
        path: "/",
        redirect: "/uebersicht",
      },
      {
        path: "uebersicht",
        name: "Gesamtübersicht",
        icon: <FontAwesomeIcon icon={faDashboard} />,
        component: "vzk/Gesamtübersicht",
      },
      {
        path: "worklflow",
        name: "Workflow",
        icon: <FontAwesomeIcon icon={faTable} />,
        component: "vzk/Workflow",
      },
      {
        path: "anordnung",
        name: "Anordnung 4711",
        icon: <FontAwesomeIcon icon={faGavel} />,
        component: "vzk/UebersichtAnordnung",
        routes: [
          {
            path: "uebersicht",
            name: "Übersicht",
            icon: <FontAwesomeIcon icon={faDashboard} />,
            component: "vzk/UebersichtAnordnung",
          },

          {
            path: "antrag",
            name: "Antrag",
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            component: "vzk/Antrag",
          },
          {
            path: "karte",
            name: "Karte",
            icon: <FontAwesomeIcon icon={faMap} />,
            component: "vzk/Karte",
          },
          {
            path: "kataster",
            name: "Katasterobjekte",
            icon: <FontAwesomeIcon icon={faList} />,
            component: "vzk/UebersichtAnordnung",

            routes: [
              {
                path: "objekt1",
                name: "Stoppschild",
                icon: <FontAwesomeIcon icon={faArrowRight} />,
                component: "vzk/UebersichtAnordnung",
              },
              {
                path: "objekt2",
                name: "Stoppschild 2",
                icon: <FontAwesomeIcon icon={faArrowRight} />,
                component: "vzk/UebersichtAnordnung",
              },
              {
                path: "objekt3",
                name: "Stoppschild 3 ",
                icon: <FontAwesomeIcon icon={faArrowRight} />,
                component: "vzk/UebersichtAnordnung",
              },
            ],
          },
          {
            path: "timeline",
            name: "zeitlicher Verlauf",
            icon: <FontAwesomeIcon icon={faTimeline} />,
            component: "vzk/Timeline",
            routes: [
              {
                path: "text",
                name: "Ersteinschätzung",
                icon: <FontAwesomeIcon icon={faFileText} />,
                component: "vzk/Anmerkung",
              },
              {
                path: "file",
                name: "Gutachten.pdf",
                icon: <FontAwesomeIcon icon={faFilePdf} />,
                component: "vzk/Anmerkung",
              },
              {
                path: "file",
                name: "Gutachten2.pdf",
                icon: <FontAwesomeIcon icon={faFilePdf} />,
                component: "vzk/Anmerkung",
              },
              {
                path: "plan",
                name: "Plan",
                icon: <FontAwesomeIcon icon={faPenRuler} />,
                component: "vzk/Designer",
              },
              {
                path: "text",
                name: "Bemerkung",
                icon: <FontAwesomeIcon icon={faFileText} />,
                component: "vzk/Anmerkung",
              },
              {
                path: "text",
                name: "Entscheidung",
                icon: <FontAwesomeIcon icon={faThumbsUp} />,
                component: "vzk/Anmerkung",
              },
            ],
          },
        ],
      },

      ,
    ],
  },
  location: {
    pathname: "/",
  },
};
export default config;
