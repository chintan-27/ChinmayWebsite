import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import logo from "./../images/logo/logo.jpg";
import Data from "./../details.json";
import swal from "sweetalert";
// import { saveAs } from "file-saver";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [c, setC] = useState(true);
  let dropdownitems = [];
  const stateHandler = () => {
    setClicked(!clicked);
  };
  const oncicknalink = () => {
    setClicked(false);
  };
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Brochure.pdf`;
    link.href = "./Brochure.pdf";
    link.click();
    // saveAs("Brochure.pdf", "Brochure.pdf");
  };
  const onclicked = () => {
    oncicknalink();
    setC(false);
    setTimeout(() => {
      setC(true);
    }, 10);
  };
  for (var i in Object.keys(Data)) {
    let key = Object.keys(Data)[i];
    let innerlist = [];
    dropdownitems.push(
      <div key={key} className="dropdown-column">
        <a
          href={`#/listproducts/${key}`}
          className="dropdown-link-head"
          onClick={onclicked}
        >
          <h2>{key}</h2>
        </a>
        {innerlist}
      </div>
    );
    for (var j in Object.keys(Data[key])) {
      let k = Object.keys(Data[key])[j];
      innerlist.push(
        <a
          key={k}
          className="dropdown-link"
          href={`#/products/${key}/${k.replaceAll("/", "!")}`}
          onClick={onclicked}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon> {k}
          <br />
        </a>
      );
    }
  }

  return (
    <div className={props.scrolled ? "navbar-active navbar" : "navbar"}>
      <Link className="navbar-logo" to="/">
        <img src={logo} alt="Siddhivinayak Group of Companies Logo" />
      </Link>
      <ul className={clicked ? "navbar-ul clicked" : "navbar-ul"}>
        <li>
          <Link className="nav-li" to="/" onClick={oncicknalink}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/about" onClick={oncicknalink}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/products" onClick={oncicknalink}>
            All Products
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/photos" onClick={oncicknalink}>
            Photos
          </Link>
        </li>
        <li>
          <div className="nav-li products-li" to="/products">
            Products <ion-icon name="caret-down-outline"></ion-icon>
            <div
              className="products-dropdown"
              style={c ? {} : { display: "none" }}
            >
              {dropdownitems}
            </div>
          </div>
        </li>
        <li>
          <Link className="nav-li" to="/contact" onClick={oncicknalink}>
            Contact us
          </Link>
        </li>
        <li title="Download Catalogue">
          <button
            className="navbar-btn"
            title="Download Catalogue"
            onClick={() => {
              oncicknalink();
              onDownload();
              swal({
                title: "Thank you",
                text: "The catalogue has been downloaded.",
                icon: "success",
                button: "Done",
              });
            }}
          >
            CATALOGUE <ion-icon name="cloud-download"></ion-icon>
          </button>
        </li>
      </ul>
      <button className="menu-btn" onClick={stateHandler}>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Navbar;
