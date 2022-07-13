import React from "react";

function Tab(props) {
  return (
    <div
      className={props.active ? "active-tab" : "tab"}
      onClick={() => props.customClickEvent(props.title)}
    >
      <p>{props.title}</p>
    </div>
  );
}

export default Tab;
