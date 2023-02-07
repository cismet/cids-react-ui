import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";

import { SimpleTimeline } from "@/components/mocks/Timelines";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";

export default function Dashboard(props) {
  useDeactivatedScrollbars();
  return (
    <PageContainer
      subTitle="... Time is an illusion, lunchtime doubly so. "
      extra={[
        <Button key="3">Op3</Button>,
        <Button key="2">Op2</Button>,
        <Button key="1" type="primary">
          Main OP
        </Button>,
      ]}
    >
      <GridContent>
        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="History of everything" style={{ height: "calc(100vh - 170px)" }}>
              <SimpleTimeline scrollHeight="calc(100vh - 170px - 80px)" />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
