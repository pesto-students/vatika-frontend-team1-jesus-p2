import React from "react";
import "./Loading.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        color: "#208854",
      }}
      spin
    />
  );

  return (
    <div className="loading">
      <h1>
        Loading
        <Spin className="spin" indicator={antIcon} />
      </h1>
    </div>
  );
}

export default Loading;
