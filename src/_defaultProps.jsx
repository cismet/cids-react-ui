import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import logo from "@/assets/cismetlogo.svg";
const config = {
  title: "cids-react-ui",
  logo: logo,
  loginBackground: "/assets/login/glen-carrie-HpMihL323k0-unsplash.jpg",
  location: {
    pathname: "/",
  },
  appList: [
    {
      icon: "/src/assets/cismetlogo.svg",
      title: "cismap Connect",
      desc: (
        <span>
          Vollbildkartenanwendung die sich automatisch<br></br> mit ihrer Fachanwendung verbindet
        </span>
      ),
      url: "/#/cismap-connect/",
    },
    {
      icon: "/src/assets/verdis.png",
      title: "VerDIS",
      desc: "Das Versiegelungs Daten Informationssystem",
      url: "/#/verdis/login",
    },
    {
      icon: "/src/assets/lagis.png",
      title: "LagIS",
      desc: "Das Lagerbuch Informationssystem",
      url: "/#/lagis/login",
    },
    {
      icon: "/src/assets/cismetlogo.svg",
      title: "Verkehrszeichenkataster",
      desc: "Das Verkehrszeichenkataster",
      url: "/#/vzk/login",
    },
    {
      icon: "/src/assets/cismetlogo.svg",
      title: "Showcase cids-react-ui",
      desc: "Demo des Applikationsframewoks",
      url: "/#/demo/",
    },
    {
      icon: "/src/assets/cismetlogo.svg",
      title: "cismet.dex",
      desc: "Webseiten der cismet GmbH",
      url: "https://cismet.de/",
      target: "_blank",
    },
  ],
};

export default config;
