import "./App.css";
import React, { useState, useEffect } from "react";
import Section1 from "./section1/section1";
import Section3 from "./section3/section3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import ProductPage from "./productpage/singleProduct";
import Section4 from "./section4/section4";
import Section5 from "./section5/section5";
import Section6 from "./section6/section6";
import Footer from "./footer/footer";
import AllProducts from "./productpage/allproducts";
import ListProducts from "./productpage/listproducts";
import AboutPage from "./aboutpage/aboutpage";
import ContactUsPage from "./contactuspage/contactuspage";
import Loader from "./loader/loader";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return !isLoading ? (
    <div className="App">
      <BrowserRouter>
        <Navbar scrolled={colorChange}></Navbar>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Section1></Section1>
                  <Section3></Section3>
                  <Section4></Section4>
                  <Section5></Section5>
                  <Section6></Section6>
                </div>
              }
            ></Route>
            <Route exact path="/products" element={<AllProducts />}></Route>
            <Route
              path="/listproducts/:type"
              element={<ListProducts />}
            ></Route>
            <Route
              path="/products/:type/:product"
              element={<ProductPage />}
            ></Route>
            <Route exact path="/about" element={<AboutPage />}></Route>
            <Route exact path="/contact" element={<ContactUsPage />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
