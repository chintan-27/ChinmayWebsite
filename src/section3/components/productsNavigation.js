import React from "react";
import Tab from "./tabs";

class ProductsNavigation extends React.Component {
  render() {
    const listTabs = this.props.products.map((d) => {
      return (
        <Tab
          key={d}
          active={this.props.active_tab === d}
          title={d}
          customClickEvent={this.props.customClickEvent}
        />
      );
    });
    return (
      <div className="products">
        <div className="product-navigation">{listTabs}</div>
      </div>
    );
  }
}

export default ProductsNavigation;
