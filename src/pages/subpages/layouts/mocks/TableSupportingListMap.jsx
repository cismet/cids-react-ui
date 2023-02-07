import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";
import { SimpleTable, SimpleTableNoPagination } from "@/components/mocks/Tables";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";
import { SimpleMapTalsperre } from "@/components/mocks/Maps";
import { ListWithAvatars } from "@/components/mocks/Lists";

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
        <Row gutter={12}>
          <Col span={24}>
            <GridContent>
              <Row gutter={12}>
                <Col span={16}>
                  <ProCard title="Table" style={{ height: "calc(100vh - 170px)" }}>
                    <SimpleTableNoPagination
                      tableStyle={{ height: "calc(100vh - 190px)" }}
                      scrollHeight="calc(100vh - 300px)"
                    />
                  </ProCard>
                </Col>
                <Col span={8}>
                  <GridContent>
                    <Row gutter={12}>
                      <Col span={24} style={{ marginBottom: 12 }}>
                        <ProCard title="List" style={{ height: "calc(60vh - 100px)" }}>
                          <ListWithAvatars scrollHeight="calc(60vh - 170px)" />
                        </ProCard>
                      </Col>
                      <Col span={24}>
                        <ProCard title="Map" style={{ height: "calc(40vh - 70px - 12px)" }}>
                          <SimpleMapTalsperre
                            mapStyle={{ height: "calc(40vh - 70px - 12px - 80px)" }}
                          />
                        </ProCard>
                      </Col>
                    </Row>
                  </GridContent>
                </Col>
              </Row>
            </GridContent>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
