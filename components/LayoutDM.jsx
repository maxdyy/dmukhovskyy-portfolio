import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Layout } from "antd";

import HeadDM from "./HeadDM";
import HeaderDM from "./HeaderDM";
import "../sass/style.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const LayoutDM = ({ children }) => (
  <Layout className="dm-layout">
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/47621770"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
    <HeadDM />
    <HeaderDM />
    {children}
  </Layout>
);

export default LayoutDM;
