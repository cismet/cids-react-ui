import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer subTitle="... a map with supporting stats">
      <GridContent>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={24}>
            <ProCard title="Map" style={{ height: "calc(60vh)" }}></ProCard>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="List" style={{ height: "calc(60vh)" }}></ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
