import React from "react";
import Intro from "../components/aboutus/intro/index";
import WhoWeAre from "../components/aboutus/whoWeAre/index";
import Goals from "../components/aboutus/goals/index";
import Benefits from "../components/aboutus/benefits";

const AboutUs = () => {
  return (
    <div>
      <Intro />
      <WhoWeAre />
      <Goals />
      <Benefits />
    </div>
  );
};

export default AboutUs;
