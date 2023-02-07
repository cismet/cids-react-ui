import { Button } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";
import "react-cismap/topicMaps.css";
import "leaflet/dist/leaflet.css";
import { FirstDesigner, SecondDesigner } from "@/components/mocks/Designers";
import useDeactivatedScrollbars from "@/hooks/useDeactivatedScrollbars";

export default function Dashboard(props) {
  const [responsive, setResponsive] = useState(false);

  useDeactivatedScrollbars();
  return (
    <PageContainer
      subTitle="... to interactively design stuff"
      extra={[
        <Button key="3">Example 2</Button>,
        <Button key="2">Example 1</Button>,
        <Button key="1" type="primary">
          Clear
        </Button>
      ]}
    >
      <GridContent>
        <Row gutter={12}>
          <Col span={24}>
            <FirstDesigner initialContent={example} />
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
}

const example = {
  version: "5.2.1",
  objects: [
    {
      type: "rect",
      version: "5.2.1",
      originX: "left",
      originY: "top",
      left: 464,
      top: 253,
      width: 50,
      height: 50,
      fill: "#91577b",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 0.8,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      rx: 0,
      ry: 0
    },
    {
      type: "rect",
      version: "5.2.1",
      originX: "left",
      originY: "top",
      left: 210,
      top: 212,
      width: 50,
      height: 50,
      fill: "#1f28ee",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 0.8,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      rx: 0,
      ry: 0
    },
    {
      type: "rect",
      version: "5.2.1",
      originX: "left",
      originY: "top",
      left: 303,
      top: 381,
      width: 50,
      height: 50,
      fill: "#2b2c25",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 0.8,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      rx: 0,
      ry: 0
    },
    {
      type: "i-text",
      version: "5.2.1",
      originX: "left",
      originY: "top",
      left: 316,
      top: 79,
      width: 598.13,
      height: 254.93,
      fill: "#70f975",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 0.5,
      scaleY: 0.5,
      angle: 1,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      fontFamily: "helvetica",
      fontWeight: "",
      fontSize: 40,
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit",
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: "left",
      fontStyle: "normal",
      lineHeight: 1.16,
      textBackgroundColor: "",
      charSpacing: 0,
      styles: [],
      direction: "ltr",
      path: null,
      pathStartOffset: 0,
      pathSide: "left",
      pathAlign: "baseline"
    }
  ]
};
