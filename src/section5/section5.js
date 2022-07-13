import React from "react";
import CenterTitle from "../webcomponents/centerTitle";
import Image1 from "./images/aa.jpg";
import Image2 from "./images/bb.jpg";
import Image3 from "./images/cc.jpg";
import Image4 from "./images/dd.jpg";

class Section5 extends React.Component {
  render() {
    return (
      <div className="section5">
        <CenterTitle title="List of Industries" />
        <h3 style={{ textAlign: "center", fontWeight: 300 }}>
          List of Industries we serve.
        </h3>
        <div className="industry-row">
          <div className="industry-column">
            <img src={Image1} alt="Oil and Gas" />
            <div className="industry-h2">
              <h2>1.</h2>
            </div>
            <p>Oil And Gas</p>
          </div>
          <div className="industry-column">
            <img src={Image2} alt="Construction" />
            <div className="industry-h2">
              <h2>2.</h2>
            </div>
            <p>Construction</p>
          </div>
          <div className="industry-column">
            <img src={Image3} alt="Power Plant" />
            <div className="industry-h2">
              <h2>3.</h2>
            </div>
            <p>Power Plant</p>
          </div>
          <div className="industry-column">
            <img src={Image4} alt="Chemical Industry" />
            <div className="industry-h2">
              <h2>4.</h2>
            </div>
            <p>Chemical Industry</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
