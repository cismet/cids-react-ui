import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";
import { FirstDesigner, SecondDesigner } from "@/components/mocks/Designers";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";
import { SimpleCalendar } from "@/components/mocks/Calendars";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  useDeactivatedScrollbars();
  return (
    <PageContainer
      subTitle="... to interactively date stuff"
      extra={[
        <Button key="3">Example 2</Button>,
        <Button key="2">Example 1</Button>,
        <Button key="1" type="primary">
          Clear
        </Button>,
      ]}
    >
      <GridContent>
        <Row gutter={12}>
          <Col span={24}>
            <SimpleCalendar />
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}
