import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import { useState } from "react";
import { Statistic, Divider } from "antd";
import { GridContent } from "@ant-design/pro-layout";
import { Col, Row, Tooltip } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

export const FullLoading = () => {
  return (
    <ProCard
      loading={true}
      title="FullLoading"
      extra="extra"
      _tooltip="This is a tip"
      //style={{ maxWidth: 300 }}

      actions={[
        <SettingOutlined key=" setting " />,
        <EditOutlined key=" edit " />,
        <EllipsisOutlined key=" ellipsis " />,
      ]}
      bordered
      hoverable
    ></ProCard>
  );
};

export const FullChildren = (props) => {
  return (
    <ProCard
      loading={false}
      title="FullChildren"
      extra="extra"
      _tooltip="This is a tip"
      //style={{ maxWidth: 300 }}

      actions={[
        <SettingOutlined key=" setting " />,
        <EditOutlined key=" edit " />,
        <EllipsisOutlined key=" ellipsis " />,
      ]}
      bordered
      hoverable
    >
      {props.children}
    </ProCard>
  );
};

export const TitledChildren = ({ actions, title, extra, children }) => {
  return (
    <ProCard loading={false} title={title} extra={extra} actions={actions} bordered hoverable>
      {children}
    </ProCard>
  );
};
