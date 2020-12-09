import React from "react";
import "./home.scss";

function Home() {
  return (
    <div className="box-section">
      <div className="wrapper-item">
        <div className="wrapper-item-top"></div>
        <div className="wrapper-item-bottom"></div>
      </div>
      <div className="wrapper-content">
        <div className="wrapper-content-menu"></div>
        <div className="wrapper-content-element">
          <div className="wp-content-el-image"></div>
          <div className="wp-content-el-text">
            <div className="box-text-first"></div>
            <div className="box-text-second"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
