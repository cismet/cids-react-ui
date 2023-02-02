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
    <div
      style={{
        border: "1px solid red",
        height: height - 56,
        marginTop: -24,
        marginLeft: -39,
        marginRight: -39,
        overflow: "hidden",
      }}
    >
      {<div>No Page Container with manually adjusting size</div>}
    </div>
  );
}
