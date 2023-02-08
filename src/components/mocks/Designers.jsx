import useWindowSize from "@/hooks/useWindowSize";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useRef, useState } from "react";
import RcResizeObserver from "rc-resize-observer";
import ProCard from "@ant-design/pro-card";
import { Button, theme } from "antd";
import { UndoOutlined, RedoOutlined, SaveFilled, PlusSquareFilled } from "@ant-design/icons";
import Color from "color";
export const FirstDesigner = (props) => {
  const { editor, onReady } = useFabricJSEditor();
  const windowSize = useWindowSize();
  const height = windowSize[1];
  const [canvasHeight, setCanvasHeight] = useState(800);
  const [canvasWidth, setCanvasWidth] = useState(800);
  const { useToken } = theme;

  const { token } = useToken();
  console.log("themeToken", token);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    const primary = new Color(token?.colorPrimary || "#ffc10799");
    editor.canvas.selectionColor = primary.alpha(0.15);
    //     editor.canvas.loadFromJSON(example, editor.canvas.renderAll.bind(editor.canvas));

    editor.canvas.setBackgroundColor("#eeeeee");

    //     //editor.canvas.renderAll();
  }, [editor, fabric]);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.setHeight(canvasHeight);
    editor.canvas.setWidth(canvasWidth);

    //addBackground();

    editor.canvas.renderAll();
  }, [canvasHeight, canvasWidth, editor, fabric]);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
  }, [editor]);

  const colors = [
    "#ffc107",
    "#17a2b8",
    "#28a745",
    "#dc3545",
    "#ffa07a",
    "#20c997",
    "#6c757d",
    "#6610f2",
    "#e83e8c",
    "#f8f9fa",
    "#007bff",
    "#f0e68c",
    "#7fffd4",
    "#ff69b4",
    "#9370db",
    "#00ced1",
    "#daa520",
    "#ff7f50",
    "#87ceeb",
    "#ba55d3",
  ];

  const onAddCircle = () => {
    const color = colors[Math.floor(Math.random() * 20)];
    const c = new fabric.Circle({
      radius: 20 + Math.random() * 30,
      fill: color + "bb",
      stroke: color + "ee",
      strokeWidth: 3,
      left: 100 + Math.random() * 400,
      top: 100 + Math.random() * 400,
    });

    editor?.canvas?.add(c);
  };
  const onAddRectangle = () => {
    const color = colors[Math.floor(Math.random() * 20)];
    const r = new fabric.Rect({
      left: 100 + Math.random() * 400,
      top: 100 + Math.random() * 400,
      fill: color + "bb",
      stroke: color + "ee",
      strokeWidth: 3,
      width: 20 + Math.random() * 80,
      height: 20 + Math.random() * 80,
    });

    editor?.canvas?.add(r);
  };
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        console.log("offset", offset);

        setCanvasHeight(offset.height - 80);
        setCanvasWidth(offset.offsetWidth - 50);
      }}
    >
      <ProCard
        title="Designer"
        style={{ height: "calc(100vh - 170px)" }}
        extra={[
          <Button onClick={onAddCircle}>add a circle</Button>,
          <Button onClick={onAddRectangle}>add a rect</Button>,
        ]}
      >
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </ProCard>
    </RcResizeObserver>
  );
};

export const SecondDesigner = () => {
  const canvasRef = useRef(null);

  return (
    <FabricJSCanvas canvasRef={canvasRef}>
      <rect left={50} top={50} width={50} height={50} fill="red" />
    </FabricJSCanvas>
  );
};
