import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/navbar";
import ProductPage from "./productpage/singleProduct";

import Footer from "./footer/footer";
import AllProducts from "./productpage/allproducts";
import ListProducts from "./productpage/listproducts";
import AboutPage from "./aboutpage/aboutpage";
import ContactUsPage from "./contactuspage/contactuspage";
import Loader from "./loader/loader";
import PhotosPage from "./photospage/photospage";
import Homepage from "./homepage/homepage";
import NotFound from "./notfound/notfound";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // const handleLoading = () => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1400);
  // };
  // useEffect(() => {
  //   window.addEventListener("load", handleLoading);
  //   // return () => window.removeEventListener("load", handleLoading);
  // }, []);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loading");
      if (el) {
        // el.remove();
        setIsLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar scrolled={colorChange}></Navbar>
        <div>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Homepage />}></Route>
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
            <Route exact path="/photos" element={<PhotosPage />}></Route>
            <Route exact path="/contact" element={<ContactUsPage />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
