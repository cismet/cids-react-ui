import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";

export default function Dashboard(props) {
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
            <ProCard title="Docs" style={{ height: "calc(20vh - 12px)" }}></ProCard>
          </Col>
        </Row>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={12}>
            <ProCard title="Form" style={{ height: "calc(60vh - 170px)" }}></ProCard>
          </Col>
          <Col span={12}>
            <ProCard title="Tabbed Form" style={{ height: "calc(60vh - 170px)" }}></ProCard>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="Docs" style={{ height: "calc(20vh - 12px)" }}></ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
