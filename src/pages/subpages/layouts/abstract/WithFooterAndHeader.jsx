import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function WithFooterAndHeader(props) {
  console.log("WithFooterAndHeader", props);

  return (
    <PageContainer
      header={{ breadcrumb: [] }}
      style={{
        border: "1px solid red",
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
        }}
      ></ProCard>
    </PageContainer>
  );
}
