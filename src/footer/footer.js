import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../images/logo.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <b>Siddhivinayak Group Of Companies</b>
          <br />
          <br />
          <p>Copyright © 2022 Siddhivinayak. All rights reserved</p>
          <br />
          <div className="center">
            <div className="social">
              <div className="fb">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <div className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </div>
            </div>
          </div>
          <br />
          <br />
          <img src={Logo} alt="Siddhivinayak Group of Companies" width={200} />
        </div>
        <div className="footer-column">
          <b>Quick Links</b>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/products" className="footer-link">
            Products
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
        <div className="footer-column">
          <b>Our Products</b>

          <Link to="/listproducts/Copper Products" className="footer-link">
            Copper
          </Link>
          <Link to="/listproducts/Brass Products" className="footer-link">
            Brass
          </Link>
          <Link
            to="/listproducts/Cupro Nickel Products"
            className="footer-link"
          >
            Cupro Nickel
          </Link>
          <Link to="/listproducts/Sheets" className="footer-link">
            Sheets
          </Link>
          <Link to="/listproducts/Other Products" className="footer-link">
            Other Products
          </Link>
          {/* <br />
          <br />
          <img src={Logo} alt="Siddhivinayak Group of Companies" width={200} /> */}
        </div>
      </div>
    );
  }
}

export default Footer;
