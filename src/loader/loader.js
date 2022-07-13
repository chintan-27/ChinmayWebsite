import React from "react";
import "./../App.css";
import Logo from "./../images/logo1.jpg";

function Loader() {
  return (
    <div className="loading">
      <div className="loading-s">
        <div className="square-container">
          <div className="square square-one"></div>
          <div className="square square-two"></div>
          <div className="square square-three"></div>
          <div className="square square-four"></div>
          <div className="square square-five"></div>
          <div className="square square-six"></div>
        </div>
        <div className="logo-square">
          <img src={Logo} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
