import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";

import "leaflet/dist/leaflet.css";
import { SimpleMapAtRathaus } from "@/components/mocks/Maps";
import { ListWithAvatars, ListWithImages } from "@/components/mocks/Lists";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer subTitle="... a map with supporting stats">
      <GridContent>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={24}>
            <ProCard title="Map" style={{ height: "calc(60vh)" }}>
              <SimpleMapAtRathaus mapStyle={{ width: "100%", height: "calc(60vh - 80px)" }} />
            </ProCard>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="List">
              <ListWithImages />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
