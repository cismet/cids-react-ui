import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function WithFooterAndHeader(props) {
  return (
    <div
      style={{
        height: "100vh", // means: double the height of the viewport
        border: "1px solid red",
        minHeight: 800,
      }}
    >
      <div>No Page Container</div>
    </div>
  );
}
