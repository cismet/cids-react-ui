import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function SimpleWithoutFooter(props) {
  return (
    <PageContainer
      style={{
        debug_border: "1px solid red",
        height: "100vh",
        width: "100%",
      }}
      extra={[
        <Button key="3">Op3</Button>,
        <Button key="2">Op2</Button>,
        <Button key="1" type="primary">
          Main OP
        </Button>,
      ]}
      subTitle="Simple Page Container Without Footer"
    >
      <ProCard
        style={{
          height: "200vh", // means: double the height of the viewport
          minHeight: 800,
        }}
      ></ProCard>
    </PageContainer>
  );
}
