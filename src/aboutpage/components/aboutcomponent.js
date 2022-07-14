import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Waypoint } from "react-waypoint";

function AboutComponent(props) {
  const [inView, setInview] = useState(false);

  const { number } = useSpring({
    from: { number: 0 },
    number: !inView ? 1 : props.number,
    delay: 200,
    config: { duration: 1500 },
  });

  return (
    <div className="about-comp">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="about-comp-num">
          <Waypoint onEnter={() => setInview(true)}>
            <animated.div>
              {number.to((n) => Math.floor(n).toString() + "+")}
            </animated.div>
          </Waypoint>
        </h1>
        <div className="about-comp-icon"> {props.icon}</div>
      </div>
      <h2 className="about-comp-h2">
        <animated.div>{props.head}</animated.div>
      </h2>
    </div>
  );
}

export default AboutComponent;
