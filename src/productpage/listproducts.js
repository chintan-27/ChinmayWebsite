import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CenterTitle from "../webcomponents/centerTitle";
import Data from "./../details.json";

function ListProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { type } = useParams();
  const data = Data[type];
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
  let list = [];
  for (var i in Object.keys(data)) {
    list.push(
      <div key={i} className="listpr-div">
        <img
          src={images[Object.keys(data)[i].replaceAll("/", " ") + ".jpg"]}
          alt={Object.keys(data)[i]}
        />
        <p>{type}</p>
        <h4>{Object.keys(data)[i]}</h4>
        <h5>● ● ● ● ●</h5>
        <br />
        <Link
          className="r-btn"
          title="Read More"
          to={`/products/${type}/${Object.keys(data)[i].replaceAll("/", "!")}`}
        >
          Read More
        </Link>
      </div>
    );
  }
  return (
    <div className="listpr">
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterTitle title={type} />
      <div className="pr-row">{list}</div>
      <br />
    </div>
  );
}

export default ListProducts;
