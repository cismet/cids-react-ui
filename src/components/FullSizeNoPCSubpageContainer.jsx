import useWindowSize from "@/hooks/useWindowSize";
import { useEffect } from "react";

export default function FSSubpageContainer(props) {
  const windowSize = useWindowSize();
  const height = windowSize[1];

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
        marginTop: -26,
        marginLeft: -39,
        marginRight: -39,
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {props.children}
    </div>
  );
}
