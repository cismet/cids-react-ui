import FSSubpageContainer from "@/components/FullSizeNoPCSubpageContainer";
import useWindowSize from "@/hooks/useWindowSize";
import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent";
import { useEffect } from "react";
import "react-cismap/topicMaps.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { MappingConstants, RoutedMap } from "react-cismap";
// import "react-bootstrap-typeahead/css/Typeahead.css";

const backgroundConfigurations = {
  lbk: {
    layerkey: "_cismetText|trueOrtho2020@80",
    layerkey_: "wupp-plan-live@100|trueOrtho2020@75|rvrSchrift@100",
    src: "/images/rain-hazard-map-bg/ortho.png",
    title: "Luftbildkarte",
  },
  stadtplan: {
    layerkey: "wupp-plan-live@60",
    src: "/images/rain-hazard-map-bg/citymap.png",
    title: "Stadtplan",
  },
  vector: {
    layerkey: "cismetLight",
    src: "/images/rain-hazard-map-bg/citymap.png",
    title: "Stadtplan",
  },
};
const backgroundModes = [
  {
    title: "Stadtplan",
    mode: "default",
    layerKey: "stadtplan",
  },
  {
    title: "Stadtplan (Vektordaten light)",
    mode: "default",
    layerKey: "vector",
  },

  { title: "Luftbildkarte", mode: "default", layerKey: "lbk" },
];

export default function SubpageMap(props) {
  return (
    <FSSubpageContainer>
      <TopicMapContextProvider appKey="cui.example.fs.map">
        <TopicMapComponent
          homeZoom={19}
          gazData={[]}
          gazetteerSearchControl={false}
          hamburgerMenu={false}
        ></TopicMapComponent>
      </TopicMapContextProvider>
    </FSSubpageContainer>
  );
}
