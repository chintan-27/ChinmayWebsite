import { React, useEffect } from "react";
import Section1 from "./../section1/section1";
import Section3 from "./../section3/section3";
import Section4 from "./../section4/section4";
import Section5 from "./../section5/section5";
import Section6 from "./../section6/section6";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Section1></Section1>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
    </div>
  );
}

export default Homepage;
