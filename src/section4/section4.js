import React from "react";
import Image1 from "./about-img/1.jpg";
import Image2 from "./about-img/2.jpg";
import Image3 from "./about-img/3.jpg";
import Image4 from "./about-img/4.jpg";
import { Link } from "react-router-dom";

class Section4 extends React.Component {
  render() {
    return (
      <div className="row section4">
        <div className="column">
          <div className="about-grid-container">
            <div className="about-item1 about-item">
              <img src={Image1} alt="Copper Rods" />
            </div>
            <div className="about-item2 about-item">
              <img src={Image2} alt="Copper Sheets" />
            </div>
            <div className="about-item3 about-item">
              <img src={Image3} alt="Metal Drilling" />
            </div>
            <div className="about-item4 about-item">
              <img src={Image4} alt="Metal Background" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="about-details">
            <h1>Siddhivinayak Group of Companies</h1>
            <h5>● ● ● ● ●</h5>
            <br />
            <p>
              We are a leading name in Copper & Copper Base Alloys Industry. We
              have a successful history in manufacturing quality products for
              India as well as international market. Our reputation is built on
              their clients satisfaction and quality dedication.
            </p>
            <br />
            <p>
              All of our copper and copper alloy products meet the applicable
              IS, BS, DIN, ASTM, and JIS standards, as well as customer-specific
              requirements.
            </p>
            <br />
            <br />
            <Link to="/about" className="read-more-btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
