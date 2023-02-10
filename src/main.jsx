import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "@/AppRouter";
import "./index.css";
import deDE from "antd/locale/de_DE";
import enUS from "antd/locale/en_US";
import frFR from "antd/locale/fr_FR";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import * as X from "@ant-design/pro-provider/";
import enUSProComponents from "@ant-design/pro-provider/lib/locale/en_US";

import { ConfigProvider, DatePicker, Layout } from "antd";
import { TinyArea } from "@ant-design/plots";
//import "antd/dist/reset.css";

console.log("navigator", navigator.language);
window.localStorage.setItem("umi_locale", "en-US");
//window.localStorage.removeItem("umi_locale");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider locale={deDE}>
      <Router>
        <AppRouter />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
