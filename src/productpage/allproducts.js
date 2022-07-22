import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CenterTitle from "../webcomponents/centerTitle";
import Data from "./../details.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

function AllProducts() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(40);

  useEffect(() => {
    if (window.screen.width <= 1275 && window.screen.width > 925) {
      setSpaceBetween(10);
    } else if (window.screen.width <= 925 && window.screen.width > 720) {
      setSpaceBetween(80);
    } else if (window.screen.width > 1275) {
      setSpaceBetween(40);
    } else {
      setSpaceBetween(10);
    }
  }, [setSpaceBetween]);

  useEffect(() => {
    if (window.screen.width > 1125) {
      setSlidesPerView(4);
    } else if (window.screen.width <= 1125 && window.screen.width > 925) {
      setSlidesPerView(3);
    } else if (window.screen.width <= 925 && window.screen.width > 600) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }, [setSlidesPerView]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return 0;
    });
    return images;
  };
  const images = importAll(
    require.context("./../images", false, /\.(png|jpe?g|svg)$/)
  );
  const imcontainers = () => {
    let con = [];
    for (var k in Object.keys(images)) {
      con.push(
        <SwiperSlide
          key={k}
          className="photos-slider"
          style={{
            width: "200px",
            height: "200px",
            boxShadow: "2px 3px 4px #0003",
            borderRadius: "2px",
          }}
        >
          <img
            src={images[Object.keys(images)[k]]}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={Object.keys(images)[k]}
          />
        </SwiperSlide>
      );
    }
    return con;
  };
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
      <Swiper
        style={{ marginBottom: "0px", height: "250px" }}
        slidesPerView={slidesPerView}
        grabCursor={true}
        spaceBetween={spaceBetween}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imcontainers()}
      </Swiper>
      <div style={{ textAlign: "center", zIndex: "100000" }}>
        <Link to={"/photos"} className="view-more-btn">
          View All Photos ⟶
        </Link>
      </div>
      <br />
      <br />
      <div className="allproducts">{products()}</div>
      <br />
      <br />
    </div>
  );
}

export default AllProducts;
