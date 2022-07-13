import React from "react";

function ListColumn(props) {
  return (
    <div>
      <h2 style={{ margin: 10 }}>{props.heading}</h2>
      <h5 style={{ fontSize: 20, margin: 10, color: "#b87333" }}>● ● ● ● ●</h5>
      {props["list"].map((p, index) => {
        return (
          <div className="list" key={p}>
            <ion-icon name="checkmark-circle"></ion-icon> {p}
          </div>
        );
      })}
    </div>
  );
}

export default ListColumn;
