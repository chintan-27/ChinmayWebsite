import React from "react";
import "./../../App.css";
import BrassPipes from "./../../images/Square Pipes.jpg";
import { useSpring, animated } from "react-spring";
import ContactUsBtn from "./../../webcomponents/contactUsbtn";

function BrassPipesComponent() {
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
        <h1>Manufacturer of Copper pipes upto 12 inch OD.</h1>
        <br />
        <animated.div style={props3}>
          <p>
            Pipes of <b> all shapes SQUARE, TRIANGLE, CIRCLE, etc.</b>
          </p>
        </animated.div>
        <br />
        <animated.div style={props4}>
          <br />
          <br />
          <br />
          <br />
          <ContactUsBtn />
        </animated.div>
      </animated.div>
      <animated.div className="s1-right-half" style={props}>
        <img src={BrassPipes} alt="Brass Pipes" />
      </animated.div>
    </div>
  );
}

export default BrassPipesComponent;
