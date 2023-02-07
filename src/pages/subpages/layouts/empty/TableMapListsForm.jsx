import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer
      subTitle="... a table with a supporting list and an overview-map"
      extra={[
        <Button key="3">Op3</Button>,
        <Button key="2">Op2</Button>,
        <Button key="1" type="primary">
          Main OP
        </Button>,
      ]}
    >
      <GridContent>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={14}>
            <ProCard title="Table" style={{ height: "calc(80vh - 170px)" }}></ProCard>
          </Col>
          <Col span={10}>
            <ProCard title="Map" style={{ height: "calc(80vh - 170px)" }}></ProCard>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={8}>
            <ProCard title="List" style={{ height: "calc(20vh - 12px)" }}></ProCard>
          </Col>
          <Col span={8}>
            <ProCard title="List" style={{ height: "calc(20vh - 12px)" }}></ProCard>
          </Col>
          <Col span={8}>
            <ProCard title="List" style={{ height: "calc(20vh - 12px)" }}></ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
