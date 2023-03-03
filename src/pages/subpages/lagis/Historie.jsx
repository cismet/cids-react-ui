import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";

import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";
import { SimpleGraph, SimpleLandparcelHistory } from "@/components/mocks/Graphs";
import { HistoryDisplayOptions, HistoryInfo, HistoryOptions } from "@/components/mocks/Forms";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);
  useDeactivatedScrollbars();
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
          <Col span={24}>
            <ProCard
              title="Graph"
              style={{ height: "calc(80vh - 170px)", _border: "1px solid green" }}
            >
              <SimpleLandparcelHistory height="calc(80vh - 250px)" />
            </ProCard>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={8}>
            <ProCard title="Optionen" style={{ height: "calc(20vh - 12px)" }}>
              <HistoryOptions />
            </ProCard>
          </Col>
          <Col span={8}>
            <ProCard title="Darstellung" style={{ height: "calc(20vh - 12px)" }}>
              <HistoryDisplayOptions />
            </ProCard>
          </Col>
          <Col span={8}>
            <ProCard title="Informationen" style={{ height: "calc(20vh - 12px)" }}>
              <HistoryInfo />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
