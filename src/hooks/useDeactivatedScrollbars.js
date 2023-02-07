import { useEffect } from "react";

export default function useDeactivatedScrollbars() {
  useEffect(() => {
    document.documentElement.style.setProperty("--dynamic-overflow", "hidden");
    return () => {
      document.documentElement.style.setProperty("--dynamic-overflow", "auto");
    };
  }, []);
}
