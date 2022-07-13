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
            We are a leading name in Copper & Copper Base Alloys Industry. We
            have a successful history in manufacturing quality products for
            India as well as international market. Our reputation is built on
            their clients satisfaction and quality dedication.
            <br />
            <br />
            All of our copper and copper alloy products meet the applicable IS,
            BS, DIN, ASTM, and JIS standards, as well as customer-specific
            requirements. Our facility includes all of the essential machinery,
            in-house testing labs, and testing facilities to guarantee that the
            products fulfil electrical, mechanical, and chemical quality
            requirements at every step of production.
          </p>
          <br />
          <h3>Technology</h3>
          <br />
          <p>
            The manufacturing process established by us uses the latest
            technologies for all our production process creating high efficiency
            in our working systems.We use the most advanced machines for all our
            production processes & have all our systems with high quality
            adherence. This constant updating in our machinery & process helps
            us in manufacturing high quality products, reduction in wastage,
            meeting environmental norms, increase productivity & produce tools
            and terminals with zero error possibilities.We always strive hard to
            satisfy all the needs of our customers & maintain accuracy in all
            the products that we deliver.
          </p>
        </div>
      </div>
      <div className="row" style={{ padding: "0" }}>
        <div className="column mission">
          <h3>Our Mission</h3>
          <br />
          <p>
            Our mission is to go beyond every means to enhance the satisfaction
            of every customer associated with our company.Our mission is to
            provide consumers across the world with affordable, high-quality
            products that meet international standards for copper, copper
            alloys, and other brass pipes. We think that the metal industry will
            prosper in the future because to its high-quality products.
          </p>
        </div>
        <div className="column mission">
          <h3>Our Vision</h3>
          <p>
            Our dream is to become an unconquerable leader in the global
            automotive industry
          </p>
          <br />
          <h3>Our Values</h3>
          <p>
            We are a company that runs on values, which denotes our focus to win
            market competition by indulging in right doings.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="about-row">
        <AboutComponent
          head="Employees"
          number={217}
          icon={<ion-icon name="person"></ion-icon>}
        />
        <AboutComponent
          head="Satisfied Customers"
          number={244}
          icon={<ion-icon name="thumbs-up"></ion-icon>}
        />
        <AboutComponent
          head="Projects Completed"
          number={287}
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
