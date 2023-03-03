import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClockRotateLeft,
  faDashboard,
  faDroplet,
  faFilePdf,
  faFolderOpen,
  faMoneyBill,
  faPieChart,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/lagis.png";
const config = {
  title: "LagIS",
  logo: logo,
  loginBackground: "/assets/login/simon-wierzba-4N0uFUstIJk-unsplash.jpg",

  layout: "mix",
  splitMenus: false,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#722ED1",

  route: {
    routes: [
      {
        path: "/",
        redirect: "/menu/uebersicht",
      },
      {
        path: "uebersicht",
        name: "Übersicht",
        icon: <FontAwesomeIcon icon={faDashboard} />,
        component: "lagis/Uebersicht",
      },
      {
        path: "verwaltungsbereiche",
        name: "Verwaltungsbereiche",
        icon: <FontAwesomeIcon icon={faFolderOpen} />,
        component: "lagis/Verwaltungsbereiche",
      },

      {
        path: "mipa",
        name: "Miet- und Pachtverträge",
        icon: <FontAwesomeIcon icon={faMoneyBill} />,
        component: "lagis/Mipa",
      },
      {
        path: "rebe",
        name: "Rechte und Belastungen",
        icon: <FontAwesomeIcon icon={faRoad} />,
        component: "lagis/Rebe",
      },
      {
        path: "nutzung",
        name: "Nutzung",
        icon: <FontAwesomeIcon icon={faPieChart} />,
        component: "lagis/Nutzung",
      },
      {
        path: "vorgaenge",
        name: "Vorgänge",
        icon: <FontAwesomeIcon icon={faArrowRight} />,
        component: "lagis/Vorgaenge",
      },
      {
        path: "historie",
        name: "Historie",
        icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
        component: "lagis/Historie",
      },
      {
        path: "kassenzeichen",
        name: "Kassenzeichen",
        icon: <FontAwesomeIcon icon={faDroplet} />,
        component: "lagis/Kassenzeichen",
      },
      {
        path: "dms",
        name: "DMS",
        icon: <FontAwesomeIcon icon={faFilePdf} />,
        component: "lagis/DMS",
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default config;
