import { React, useEffect } from "react";
import CenterTitle from "../webcomponents/centerTitle";
import Image from "./img.jpg";
import "./../App.css";
import AboutComponent from "./components/aboutcomponent";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterTitle title="About Us" />
      <br />

      <div className="row" style={{ padding: "0" }}>
        <div className="column">
          <img src={Image} alt="Metal Work" className="about-page-img" />
        </div>
        <div className="column about-page-right">
          <h2> About Siddhivinayak Group of Companies</h2>
          <br />
          <h3>
            Premier brand in the Copper and Copper Base Alloys Sector - Estd.
            1979
          </h3>
          <h5>● ● ● ● ●</h5>
          <br />
          <p>
            We are a leading name in the copper and copper alloy industry. We
            have a successful history in manufacturing quality products for the
            Indian as well as the international market. Our reputation is built
            on customer satisfaction and dedication to quality.
            <br />
            <br />
            All of our copper and copper alloy products comply with applicable
            IS, BS, DIN, ASTM and JIS standards, as well as specific customer
            requirements. Our facility includes all essential machinery,
            in-house laboratories and testing facilities to ensure products meet
            electrical, mechanical and chemical quality requirements at every
            stage of production.
          </p>
          <br />
          <h3>Technology</h3>
          <br />
          <p>
            The production process that we have established uses the latest
            technologies for all of our production processes, creating high
            efficiency in our working system. We use the most advanced machinery
            for all of our production processes and have all our systems with
            high-quality precision. Continuously updating our machines and
            processes helps us produce high-quality products, reduce waste, meet
            environmental standards, increase productivity and manufacture
            products without any possibility of error. We always strive to meet
            every customer's needs and maintain precision in all the products we
            offer.
          </p>
        </div>
      </div>
      <div className="row" style={{ padding: "0" }}>
        <div className="column mission">
          <h3>Our Mission</h3>
          <br />
          <p>
            Our mission is to constantly rise to improve the satisfaction of
            every customer associated with our business. Our mission is to
            provide consumers worldwide with affordable, high-quality products
            that meet customers' standards for copper, copper alloys and brass
            tubes. We believe the industry will thrive in the future with
            high-quality products.
          </p>
        </div>
        <div className="column mission">
          <h3>Our Vision</h3>
          <p>
            Our dream is to be the invincible leader of the global Metal
            industry
          </p>
          <br />
          <h3>Our Values</h3>
          <p>
            We are a scrupulous company that operates on values, which glorify
            our goal to win the market competition by indulging in the right
            doings.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="about-row">
        <AboutComponent
          head="Products"
          number={50}
          icon={<ion-icon name="shapes"></ion-icon>}
        />
        <AboutComponent
          head="Satisfied Customers"
          number={200}
          icon={<ion-icon name="thumbs-up"></ion-icon>}
        />
        <AboutComponent
          head="Projects Completed"
          number={350}
          icon={<ion-icon name="trophy"></ion-icon>}
        />
        <AboutComponent
          head="Experience"
          number={43}
          icon={<ion-icon name="briefcase"></ion-icon>}
        />
      </div>
      <br />
    </div>
  );
}

export default AboutPage;
