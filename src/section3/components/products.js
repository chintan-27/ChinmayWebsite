import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";

function Products(props) {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(40);
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return 0;
    });
    return images;
  };

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

  const images = importAll(
    require.context("./../../images", false, /\.(png|jpe?g|svg)$/)
  );

  const listSlides = Object.keys(props.details).map((d) => {
    return (
      <SwiperSlide key={d}>
        <div>
          <img src={images[d.replaceAll("/", " ") + ".jpg"]} alt={d} />
          <p>{props.activeTab}</p>
          <h4>{d}</h4>
          <h5>● ● ● ● ●</h5>
          <Link
            title="Read More"
            to={`/products/${props.activeTab}/${d.replaceAll("/", "!")}`}
          >
            <ion-icon name="arrow-forward"></ion-icon>
          </Link>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        grabCursor={true}
        spaceBetween={spaceBetween}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {listSlides}
      </Swiper>
    </div>
  );
}

export default Products;
