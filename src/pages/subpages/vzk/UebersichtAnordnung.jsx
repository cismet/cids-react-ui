import { Button, Statistic, Tooltip } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";
import { SimpleMapAtRathaus } from "@/components/mocks/Maps";
import { ArrowDownOutlined, ArrowUpOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { TinyArea } from "@ant-design/plots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Color from "color";
import { Link } from "react-router-dom";
import {
  DoubleScalarStatPanel,
  ExperimentalStatPanel,
  LiquidDemo,
  TinyAreaStatPanelCard,
  TinyAreaStatPanelWithScalarValue,
  TinyColumnsStatPanelCard,
  TinyLineStatPanelCard,
  TinyProgress,
} from "@/components/mocks/Stats";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);
  console.log("TinyArea", TinyArea);
  const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: {
      marginBottom: 12,
    },
  };
  const bottomColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: {
      marginBottom: 0,
    },
  };

  return (
    <PageContainer subTitle="... a map with supporting stats">
      <GridContent>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <LiquidDemo />
          </Col>
          <Col {...topColResponsiveProps}>
            <DoubleScalarStatPanel />
          </Col>
          <Col {...topColResponsiveProps}>
            <TinyProgress />
          </Col>
          <Col {...topColResponsiveProps}>
            <TinyAreaStatPanelCard />
          </Col>
        </Row>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={24}>
            <ProCard title="Map" style={{ height: "calc(70vh - 170px)" }}>
              <SimpleMapAtRathaus
                mapStyle={{ width: "100%", height: "calc(70vh - 250px)" }}
                style={{ minHeight: "100%" }}
              />
            </ProCard>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...bottomColResponsiveProps}>
            <TinyColumnsStatPanelCard />
          </Col>
          <Col {...bottomColResponsiveProps}>
            <TinyLineStatPanelCard />
          </Col>
          <Col {...bottomColResponsiveProps}>
            <NumberWidgetDiv
              style={{ height: "calc(15vh - 12px)" }}
              title="Numberpanel"
              subtitle="... with subtitle"
              icon={faMugHot}
              number="11.28"
              bgcolor="#58C4DC"
              _bgcolor="black"
              _fgColor="white"
            />
          </Col>
          <Col {...bottomColResponsiveProps}>
            <NumberWidgetDiv
              style={{ height: "calc(15vh - 12px)" }}
              title="Numberpanel"
              subtitle="... with subtitle and link"
              icon={faImage}
              number="42"
              linkTo="/examples/mapList"
            />
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}

const NumberWidgetDiv = (props) => {
  const { bgcolor, fgColor, linkTo, title, subtitle, icon, number, additionalContent } = props;

  const cardStyle = props.style;
  let _fgColor = fgColor || "black";
  if (bgcolor) {
    cardStyle.backgroundColor = bgcolor;
    if (new Color(bgcolor).isDark()) {
      _fgColor = "white";
    }
  }
  cardStyle.color = fgColor;

  const card = (
    <ProCard
      style={cardStyle}
      headStyle={cardStyle}
      {...props}
      title={<span style={{ color: _fgColor }}> {title}</span>}
      extra={
        <span style={{ color: _fgColor }}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </span>
      }
    >
      <div
        style={{
          minHeight: "21px",
        }}
      >
        {subtitle}
      </div>
      <div
        style={{
          marginBottom: -150,
        }}
      >
        <div
          style={{
            minHeight: "70px",
          }}
        >
          {additionalContent}
        </div>
        <div
          style={{
            fontSize: 100,
            color: bgcolor ? "#ffffff30" : "#00000020",
            position: "relative",
            textAlign: "center",
            top: -120,
          }}
        >
          {number}
        </div>
      </div>
    </ProCard>
  );

  if (linkTo) {
    const basepath = "/demo"; //todo: add basepath context
    return <Link to={basepath + linkTo}>{card}</Link>;
  } else {
    return card;
  }
};
