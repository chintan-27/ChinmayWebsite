import React from "react";
import "./../App.css";
import Data from "../details.json";
import CenterTitle from "../webcomponents/centerTitle";
import ProductNavigation from "./components/productsNavigation";
import Products from "./components/products";
import { Link } from "react-router-dom";

class Section3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active_tab: Object.keys(Data)[0] };
  }
  activateTab = (d) => {
    this.setState({ active_tab: d });
  };
  render() {
    return (
      <div className="section-3">
        <CenterTitle title="Our Products" />
        <ProductNavigation
          products={Object.keys(Data)}
          active_tab={this.state.active_tab}
          customClickEvent={this.activateTab}
        />
        <Products
          details={Data[this.state.active_tab]}
          activeTab={this.state.active_tab}
        />
        <br />
        <br />
        <Link
          to={"/listproducts/" + this.state.active_tab}
          className="view-more-btn"
        >
          View All ⟶
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Section3;
