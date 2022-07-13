import React from "react";

function GridItem(props) {
  let content;
  if (props.details.type === "list") {
    content = [];
    for (var i in props.details.content) {
      content.push(
        <div className="gi-details" key={i}>
          <ion-icon style={{ color: "#05ce48" }} name="checkmark"></ion-icon>{" "}
          {props.details.content[i]}
        </div>
      );
    }
  } else if (props.details.type === "desc") {
    content = <div className="gi-details">{props.details.content}</div>;
  } else {
    content = [];
    for (i in props.details.content) {
      content.push(
        <div key={i} className="gi-details">
          <ion-icon style={{ color: "#05ce48" }} name="checkmark"></ion-icon>{" "}
          <b>{props.details.content[i][0]} : </b>
          {props.details.content[i][1]}
        </div>
      );
    }
  }
  return (
    <div className="gi-comp">
      <p>{props.details.heading}</p>
      <br />
      {content}
    </div>
  );
}

export default GridItem;
