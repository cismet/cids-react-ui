import useWindowSize from "@/hooks/useWindowSize";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useRef, useState } from "react";
import RcResizeObserver from "rc-resize-observer";
import ProCard from "@ant-design/pro-card";
import { Button, theme } from "antd";
import { UndoOutlined, RedoOutlined, SaveFilled, PlusSquareFilled } from "@ant-design/icons";
import Color from "color";
import { Badge, Calendar } from "antd";

import "./calendars.css";
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event。。....",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
export const SimpleCalendar = (props) => {
  const { editor, onReady } = useFabricJSEditor();
  const windowSize = useWindowSize();
  const height = windowSize[1];
  const [canvasHeight, setCanvasHeight] = useState(800);
  const [canvasWidth, setCanvasWidth] = useState(800);
  const { useToken } = theme;

  const { token } = useToken();
  console.log("themeToken", token);
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
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
      <ProCard title="Calendar" style={{ height: "calc(100vh - 170px)" }}>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </ProCard>
    </RcResizeObserver>
  );
};
