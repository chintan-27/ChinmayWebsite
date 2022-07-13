import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import CenterTitle from "../webcomponents/centerTitle";
import Data from "./../details.json";
import "./../App.css";
import ListColumn from "./components/listColumn";
import ContactUsBtn from "../webcomponents/contactUsbtn";
import GridItem from "./components/gridItem";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { type, product } = useParams();
  const name = product.replaceAll("!", "/");
  const image = require("./../images/" + product.replaceAll("!", " ") + ".jpg");
  const productdetails = Data[type][name];
  const a = "additional" in productdetails;
  const b = "additionalDesc" in productdetails;
  const c = "sheetinfo" in productdetails;
  let list = [];
  if (a) {
    for (var i in Object.keys(productdetails.additional)) {
      list.push({
        heading: Object.keys(productdetails.additional)[i],
        content:
          productdetails.additional[Object.keys(productdetails.additional)[i]],
        type: "list",
      });
    }
  }
  if (b) {
    for (i in Object.keys(productdetails.additionalDesc)) {
      list.push({
        heading: Object.keys(productdetails.additionalDesc)[i],
        content:
          productdetails.additionalDesc[
            Object.keys(productdetails.additionalDesc)[i]
          ],
        type: "desc",
      });
    }
  }
  if (c) {
    for (i in Object.keys(productdetails.sheetinfo)) {
      list.push({
        heading: Object.keys(productdetails.sheetinfo)[i],
        content:
          productdetails.sheetinfo[Object.keys(productdetails.sheetinfo)[i]],
        type: "sheetinfo",
      });
    }
  }
  let griditems = [];
  if (list.length > 0) {
    for (var j in list) {
      griditems.push(
        <div className="grid-item" key={j}>
          <GridItem details={list[j]} />
        </div>
      );
    }
  }

  return (
    <div className="singleProduct">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="column">
          <img src={image} className="main-img" alt={name} />
        </div>
        <div className="column product-details">
          <h1>
            {productdetails["fullname"] ? productdetails["fullname"] : name}
          </h1>
          <h5>● ● ● ● ●</h5>
          <h4>{type}</h4>
          <br />
          <p style={{ whiteSpace: "pre-wrap" }}>
            {productdetails["description"].replaceAll("\n ", "\n\n")}
          </p>
          <br />
          <ContactUsBtn />
        </div>
      </div>
      <br />
      <br />
      <br />

      {"applications" in productdetails || "advantages" in productdetails ? (
        <div className="row" style={{ backgroundColor: "#ececec" }}>
          {productdetails.applications ? (
            <div className="column">
              <ListColumn
                list={productdetails["applications"]}
                heading="Applications"
              />
            </div>
          ) : (
            <div></div>
          )}
          {productdetails.advantages ? (
            <div className="column">
              <ListColumn
                list={productdetails["advantages"]}
                heading="Benefits"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <br></br>

      {a || b || c ? (
        <div className="More Information">
          <CenterTitle title="More Information" />
          <div className="grid-container">{griditems}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ProductPage;
