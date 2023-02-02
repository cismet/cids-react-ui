import useWindowSize from "@/hooks/useWindowSize";
import { useEffect } from "react";

export default function FSSubpageContainer({ title, children, extraArray, footerArray, subtitle }) {
  const windowSize = useWindowSize();
  const height = windowSize[1];

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
      extra={extraArray}
      footer={footerArray}
      title={title}
      subTitle={subtitle}
    >
      <ProCard
        style={{
          border: "1px solid orange",
          height: height - 250,
          minHeight: 800,
        }}
      >
        {children}
      </ProCard>
    </PageContainer>
  );
}
