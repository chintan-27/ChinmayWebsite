import React from "react";
import CenterTitle from "../webcomponents/centerTitle";

function PhotosPage() {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return 0;
    });
    return images;
  };
  const images = importAll(
    require.context("./../images", false, /\.(png|jpe?g|svg)$/)
  );
  const imcontainers = () => {
    let con = [];
    for (var k in Object.keys(images)) {
      con.push(
        <div key={k}>
          <img
            style={{ maxWidth: "70%", maxHeight: "400px" }}
            src={images[Object.keys(images)[k]]}
            alt={Object.keys(images)[k]}
          />
        </div>
      );
    }
    return con;
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterTitle title="Our Product Photos" />
      <div style={{ textAlign: "center", margin: "50px" }}>
        {imcontainers()}
      </div>
    </div>
  );
}

export default PhotosPage;
