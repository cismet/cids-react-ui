import { Button, Progress, Statistic, Tooltip } from "antd";
import { useState } from "react";

import FullSizeWithPCSubpageContainer from "@/components/FullSizeWithPCSubpageContainer.jsx";
import ProCard from "@ant-design/pro-card";
import { GridContent, PageContainer } from "@ant-design/pro-layout";
import { Col, Row } from "antd";

import { SimpleMapAtRathaus } from "@/components/mocks/Maps";
import { ArrowDownOutlined, ArrowUpOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Liquid, TinyArea, TinyColumn, TinyLine } from "@ant-design/plots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Color from "color";
import { Link } from "react-router-dom";

export const ExperimentalStatPanel = (props) => {
  return (
    <div
      style={{
        height: "calc(15vh - 12px)",
        backgroundColor: "#58C4DC",
        color: "white",
      }}
    >
      <ProCard
        title="Experiments"
        extra={<ArrowUpOutlined />}
        //actions={<div style={{ backgroundColor: "#58C4DC" }}></div>}
        style={{
          height: "calc(15vh - 12px)",
          backgroundColor: "#58C4DC",
          color: "white",
        }}
      >
        <div style={{ minHeight: "100%", border: "1px red solid" }}> Inner Area</div>
      </ProCard>
    </div>
  );
};

export const DoubleScalarStatPanel = (props) => {
  return (
    <ProCard
      title="DoubleScalarStatPanel"
      extra={
        <Tooltip title="Hier geht es weiter">
          <InfoCircleOutlined />
        </Tooltip>
      }
      style={{ height: "calc(15vh - 12px)" }}
    >
      <>
        <Row gutter={24}>
          <Col>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Col>
          <Col>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Col>
        </Row>
      </>
    </ProCard>
  );
};

export const TinyAreaStatPanelWithScalarValue = (props) => {
  return (
    <ProCard title="Stats" style={{ height: "calc(15vh - 12px)" }}>
      <TinyArea
        style={{ height: "calc(15vh - 100px)" }}
        {...{
          autoFit: true,
          data: [
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983,
            340, 539, 243, 226, 192,
          ],
          smooth: true,
        }}
      />
      <div
        style={{
          fontSize: 100,
          color: "#00000020",
          position: "relative",
          textAlign: "center",
          top: 10,
        }}
      >
        40056€
      </div>
    </ProCard>
  );
};
export const TinyAreaStatPanelCard = (props) => {
  return (
    <ProCard title="TinyAreaStatPanelCard" style={{ height: "calc(15vh - 12px)" }}>
      <TinyArea
        style={{ height: "calc(15vh - 100px)" }}
        {...{
          autoFit: true,
          data: [
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983,
            340, 539, 243, 226, 192,
          ],
          smooth: true,
        }}
      />
      <div
        style={{
          fontSize: 100,
          color: "#00000020",
          position: "relative",
          textAlign: "center",
          top: 10,
        }}
      >
        40056€
      </div>
    </ProCard>
  );
};
export const TinyColumnsStatPanelCard = (props) => {
  return (
    <ProCard title="TinyColumnsStatPanelCard" style={{ height: "calc(15vh - 12px)" }}>
      <TinyColumn
        style={{ height: "calc(15vh - 100px)" }}
        {...{
          autoFit: true,
          data: [
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983,
            340, 539, 243, 226, 192,
          ],
          smooth: true,
        }}
      />
      <div
        style={{
          fontSize: 100,
          color: "#00000020",
          position: "relative",
          textAlign: "center",
          top: 10,
        }}
      >
        40056€
      </div>
    </ProCard>
  );
};

export const TinyLineStatPanelCard = (props) => {
  return (
    <ProCard title="TinyLineStatPanelCard" style={{ height: "calc(15vh - 12px)" }}>
      <TinyLine
        style={{ height: "calc(15vh - 100px)" }}
        {...{
          autoFit: true,
          data: [
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983,
            340, 539, 243, 226, 192,
          ],
          smooth: true,
        }}
      />
      <div
        style={{
          fontSize: 100,
          color: "#00000020",
          position: "relative",
          textAlign: "center",
          top: 10,
        }}
      >
        40056€
      </div>
    </ProCard>
  );
};

export const LiquidDemo = (props) => {
  const config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };

  return (
    <ProCard title="LiquidDemo" style={{ height: "calc(15vh - 12px)" }}>
      <Liquid {...config} />
    </ProCard>
  );
};

export const TinyProgress = (props) => {
  const config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    color: ["#5B8FF9", "#E8EDF3"],
  };
  return (
    <ProCard title="TinyProgress" style={{ height: "calc(15vh - 12px)" }}>
      <Progress {...config} />
    </ProCard>
  );
};
