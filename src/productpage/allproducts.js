import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import CenterTitle from "../webcomponents/centerTitle";
import Data from "./../details.json";

function AllProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = () => {
    let p = [];
    for (var i in Object.keys(Data)) {
      let q = [];
      console.log();
      let n = Data[Object.keys(Data)[i]];

      for (var j in Object.keys(n)) {
        q.push(
          <Link
            key={Object.keys(n)[j]}
            to={
              "/products/" +
              Object.keys(Data)[i] +
              "/" +
              Object.keys(n)[j].replaceAll("/", "!")
            }
            className="single"
          >
            <li>{Object.keys(n)[j]}</li>
          </Link>
        );
      }
      p.push(
        <div key={Object.keys(Data)[i]} className="allproducts-col">
          <Link
            className="headlink"
            to={"/listproducts/" + Object.keys(Data)[i]}
          >
            <h2>{Object.keys(Data)[i]}</h2>
          </Link>
          <h5>● ● ● ● ●</h5>

          <br />
          <ul>{q}</ul>
        </div>
      );
    }
    return p;
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterTitle title="All Our Products" />
      <div className="allproducts">{products()}</div>
      <br />
      <br />
    </div>
  );
}

export default AllProducts;
