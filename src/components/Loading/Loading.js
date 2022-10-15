import React from "react";
import "./Loading.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        color: "green",
      }}
      spin
    />
  );

  return (
    <div className="loading">
      <span>Loading</span>
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Loading;
