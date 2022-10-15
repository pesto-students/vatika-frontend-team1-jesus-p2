import React from "react";
import Heading from "../Common/Heading/Heading";
import IndividualBlog from "./IndividualBlog";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <div className="heading-blog"></div>
      <div className="blog">
        <Heading content={"Gardening Blog"} />
        <div className="main-blog">
          <p>
            Starting to setup a garden can be both exciting and challenging. It
            all starts with getting your hands dirty, needing a lot of patience
            and as you keep growing, it transforms into a beautiful garden with
            flowers, fruits, veggies, and garden art. Garden beautifies your
            home and is an excellent way to spend your time after work. If
            you’re new to gardening, start reading out what other garden lovers
            has to say.
          </p>
          <img src={require("../../assets/Main-Blog.png")} alt="Cactus" />
        </div>
        <IndividualBlog />
      </div>
    </div>
  );
}

const MemoizedBlog = React.memo(Blog);
export default MemoizedBlog;
