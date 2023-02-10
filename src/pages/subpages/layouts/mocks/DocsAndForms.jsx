import { Button, Input } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";
import { SimpleDocsCard } from "../../../../components/mocks/Docs";
import { SampleVerticalForm } from "@/components/mocks/Forms";

export default function Dashboard(props) {
  useDeactivatedScrollbars();
  return (
    <PageContainer
      subTitle="... a site with a doc panel some forms and a notes field"
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
            <SimpleDocsCard height="calc(20vh - 12px)" />
          </Col>
        </Row>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={12}>
            <ProCard title="Form" style={{ height: "calc(60vh - 170px)" }}>
              <SampleVerticalForm />
            </ProCard>
          </Col>
          <Col span={12}>
            <ProCard
              title="Tabbed Form"
              tabs={{
                type: "card",
              }}
              style={{ height: "calc(60vh - 170px)" }}
            >
              <ProCard.TabPane key="tab1" tab="Querverweise">
                <ul>
                  <li>
                    <a href="https://www.google.com">Barmen 527 11/0</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">Cronenberg 47 11/2</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">Elberfeld 8 15/0</a>
                  </li>
                </ul>
              </ProCard.TabPane>
              <ProCard.TabPane key="tab2" tab="Kosten"></ProCard.TabPane>
              <ProCard.TabPane key="tab3" tab="Beschlüsse"></ProCard.TabPane>
            </ProCard>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="Notes" style={{ height: "calc(20vh - 12px)" }}>
              <Input.TextArea style={{ height: "calc(20vh - 12px - 80px)" }} />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
