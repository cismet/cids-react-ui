import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { SimpleTableNoPagination } from "@/components/mocks/Tables";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);
  useDeactivatedScrollbars();
  return (
    <PageContainer
      subTitle="... a large table "
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
            <ProCard title="Table" style={{ height: "calc(100vh - 170px)" }}>
              <SimpleTableNoPagination scrollHeight={"calc(100vh - 170px - 120px)"} />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
