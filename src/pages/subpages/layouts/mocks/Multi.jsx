import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import { useState } from "react";
import { Statistic, Divider } from "antd";
import { GridContent } from "@ant-design/pro-layout";
import { Col, Row, Tooltip } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import * as ProCardExamples from "../../components/examples/ProCard.jsx";
import * as UploadExamples from "../../components/examples/Upload.jsx";
import * as CalendarExamples from "../../components/examples/Calendar.jsx";
import * as TableExamples from "../../components/examples/Table.jsx";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import RcResizeObserver from "rc-resize-observer";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent.js";
import "react-cismap/topicMaps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 12,
    marginTop: 12,
  },
};

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer
      style={{
        debug_border: "1px solid red",
        height: "100vh",
        width: "100%",
      }}
      subTitle="Simple Page Container With Footer And Header"
    >
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <GridContent>
          <Row gutter={12}>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>{" "}
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col
              span={24}
              style={{
                marginBottom: 12,
                marginTop: 12,
              }}
            >
              <ProCardExamples.TitledChildren title="Karte">
                <TopicMapContextProvider appKey="cui.example.fs.ma2">
                  <TopicMapComponent
                    mapStyle={{ height: "50vh" }}
                    homeZoom={19}
                    gazData={[]}
                    gazetteerSearchControl={false}
                    hamburgerMenu={false}
                  ></TopicMapComponent>
                </TopicMapContextProvider>
                {/* <div style={{ height: "30vh", background: "green" }} /> */}
              </ProCardExamples.TitledChildren>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col
              span={24}
              style={{
                marginBottom: 12,
                marginTop: 12,
              }}
            >
              <ProCardExamples.TitledChildren title="Tabelle">
                <TableExamples.SimpleTable />
              </ProCardExamples.TitledChildren>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>{" "}
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullLoading />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullChildren>
                <UploadExamples.SimpleUpload />
              </ProCardExamples.FullChildren>
            </Col>
            <Col {...topColResponsiveProps}>
              <ProCardExamples.FullChildren>
                <CalendarExamples.SimpleDatePicker />
              </ProCardExamples.FullChildren>
            </Col>
          </Row>
        </GridContent>
      </RcResizeObserver>
    </PageContainer>
  );
}
{
  /* <ProCard>
            <Statistic title="Kennzahl 1" value={79.0} precision={2} />
          </ProCard>
          <Divider type={responsive ? "horizontal" : "vertical"} />
          <ProCard>
            <Statistic title="Kennzahl 2" value={112893.0} precision={2} />
          </ProCard>
          <Divider type={responsive ? "horizontal" : "vertical"} />
          <ProCard>
            <Statistic title="Kennzahl 3" value={93} suffix="/ 100" />
          </ProCard>
          <Divider type={responsive ? "horizontal" : "vertical"} />
          <ProCard>
            <Statistic title="Kennzahl 4" value={112893.0} />
          </ProCard> */
}
