import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function WithFooterAndHeader(props) {
  return (
    <PageContainer
      style={{
        debug_border: "1px solid red",
        height: "100vh",
        width: "100%",
      }}
      header={{
        title: undefined,
        breadcrumb: undefined,
      }}
    >
      <ProCard
        style={{
          height: "200vh", // means: double the height of the viewport
          border: "1px solid red",
          minHeight: 800,
        }}
      >
        <div>Empty Page Container</div>
      </ProCard>
    </PageContainer>
  );
}
