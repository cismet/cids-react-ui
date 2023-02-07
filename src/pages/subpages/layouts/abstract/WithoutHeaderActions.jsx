import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function WithoutHeaderAction(props) {
  return (
    <PageContainer
      style={{
        debug_border: "1px solid red",
        height: "100vh",
        width: "100%",
      }}
      footer={[
        <Button key="3">Reset</Button>,
        <Button key="2" type="primary">
          OP
        </Button>,
      ]}
      subTitle="Simple Page Container With Footer And Header"
    >
      <ProCard
        style={{
          height: "200vh", // means: double the height of the viewport
          minHeight: 800,
          border: "1px solid red",
        }}
      ></ProCard>
    </PageContainer>
  );
}
