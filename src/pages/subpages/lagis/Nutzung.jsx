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
import { SimpleShortTable, SimpleTable, SimpleTableNoPagination } from "@/components/mocks/Tables";
import { SimpleMapAtRathaus } from "@/components/mocks/Maps";
import { FlaechenDetailsEmpty } from "@/components/mocks/Forms";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);
  // useDeactivatedScrollbars();
  return (
    <PageContainer subTitle="... a table with supporting table">
      <GridContent>
        <Row gutter={12} style={{ marginBottom: 12 }}>
          <Col span={24}>
            <ProCard title="Map" style={{ height: "calc(100vh - 170px - 400px)" }}>
              <SimpleTableNoPagination scrollHeight="calc(100vh - 170px - 400px - 130px )" />
            </ProCard>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <ProCard title="Table" style={{ height: "400px" }}>
              <SimpleShortTable />
            </ProCard>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
