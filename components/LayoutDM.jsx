import React from "react";

import { Layout } from "antd";
import antdStyle from "antd/dist/antd.min.css";

import HeaderDM from "./HeaderDM";
import "../sass/style.scss";

const LayoutDM = ({ children }) => (
  <Layout className="dm-layout">
    <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
    <HeaderDM />
    {children}
  </Layout>
);

export default LayoutDM;
