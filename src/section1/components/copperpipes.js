import React from "react";
import "./../../App.css";
import CopperPipes from "./../../images/brass pipes.jpg";
import { useSpring, animated } from "react-spring";
import ContactUsBtn from "./../../webcomponents/contactUsbtn";

function CopperPipesComponent() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 },
  });
  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 },
    delay: 500,
  });
  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 },
    delay: 800,
  });
  const props4 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 },
    delay: 950,
  });
  return (
    <div>
      <animated.div className="s1-left-half" style={props2}>
        <h1>High Quality Copper And Brass Pipes Manufacturer in India</h1>
        <br />
        <animated.div style={props3}>
          <p>
            SIDDHIVINAYAK Group of companies is India's leading Copper and Brass
            Pipes Manufacturer
          </p>
        </animated.div>
        <br />
        <animated.div style={props4}>
          <br />
          <br />
          <ContactUsBtn />
        </animated.div>
      </animated.div>
      <animated.div className="s1-right-half" style={props}>
        <img src={CopperPipes} alt="Copper Pipes" />
      </animated.div>
    </div>
  );
}

export default CopperPipesComponent;
