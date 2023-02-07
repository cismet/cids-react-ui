import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";
import { SimpleTableNoPagination } from "@/components/mocks/Tables";
import { SimpleMapAtRathaus } from "@/components/mocks/Maps";
import { FlaechenDetailsEmpty } from "@/components/mocks/Forms";

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
        </Button>
      ]}
    >
      <GridContent>
        <Row gutter={12}>
          <Col span={24}>
            <GridContent>
              <Row gutter={12}>
                <Col span={15}>
                  <ProCard title="Table" style={{ height: "calc(100vh - 170px)" }}>
                    <SimpleTableNoPagination scrollHeight="calc(100vh - 300px)" />
                  </ProCard>
                </Col>
                <Col span={9}>
                  <GridContent>
                    <Row gutter={12}>
                      <Col span={24} style={{ marginBottom: 12 }}>
                        <ProCard title="Form" style={{ height: "calc(60vh - 100px)" }}>
                          <FlaechenDetailsEmpty />
                        </ProCard>
                      </Col>
                      <Col span={24}>
                        <ProCard
                          title="Map"
                          style={{ height: "calc(40vh - 70px - 12px)", display: "flex" }}
                        >
                          <SimpleMapAtRathaus
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
