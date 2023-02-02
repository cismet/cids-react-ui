import zhCN from "../locales/zh-CN";
import { useEffect, useState } from "react";
import { IntlProvider as Provider } from "react-intl";

export default function IntlProvider({ children }) {
  // const [{ locale }] = useLayout();
  const [message, setMessage] = useState(zhCN);
  const locale = "en-US";
  useEffect(() => {
    import(`../locales/${locale}.ts`).then((module) => {
      setMessage(module.default);
    });
  }, [locale]);

  return (
    <Provider messages={message} defaultLocale="en-US" locale="en-US">
      {children}
    </Provider>
  );
}
