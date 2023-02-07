import useWindowSize from "@/hooks/useWindowSize";
import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import { useEffect } from "react";

export default function WithFooterAndHeader(props) {
  const windowSize = useWindowSize();
  const height = windowSize[1];

  console.log("windowSize", windowSize);
  useEffect(() => {
    document.documentElement.style.setProperty("--dynamic-overflow", "hidden");
    return () => {
      document.documentElement.style.setProperty("--dynamic-overflow", "auto");
    };
  }, []);
  return (
    <PageContainer
      style={{
        border: "1px solid red",
        height: height - 126,
        overflow: "hidden",
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
      title="YXX"
    >
      <ProCard
        style={{
          border: "1px solid orange",
          height: height - 250,
          minHeight: 800,
        }}
      ></ProCard>
    </PageContainer>
  );
}
