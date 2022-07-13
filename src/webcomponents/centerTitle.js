import React from "react";
import "../App.css";

function CenterTitle(props) {
  return (
    <div className="center-title">
      <h1>{props.title}</h1>
      <div></div>
    </div>
  );
}

export default CenterTitle;
