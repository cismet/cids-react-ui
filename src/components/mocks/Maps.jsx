import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent.js";
import "react-cismap/topicMaps.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

export const SimpleMapAtRathaus = (props) => {
  return (
    <TopicMapContextProvider appKey="cui.example.fs.ma2">
      <TopicMapComponent
        mapStyle={props.mapStyle}
        homeZoom={18}
        homeCenter={[51.27225612927373, 7.199918031692506]}
        gazData={[]}
        gazetteerSearchControl={false}
        hamburgerMenu={false}
      ></TopicMapComponent>
    </TopicMapContextProvider>
  );
};

export const SimpleMapTalsperre = (props) => {
  return (
    <TopicMapContextProvider appKey="cui.example.fs.ma2">
      <TopicMapComponent
        mapStyle={props.mapStyle}
        homeZoom={18}
        homeCenter={[51.229563629835596, 7.27348029613495]}
        gazData={[]}
        gazetteerSearchControl={false}
        hamburgerMenu={false}
      ></TopicMapComponent>
    </TopicMapContextProvider>
  );
};
