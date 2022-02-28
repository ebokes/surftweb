import React from "react";
import { IntroContainer, Col1, Col2 } from "./IntroStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import group from "../../../images/group-of-people-sitting.png";

const Intro = () => {
  return (
    <Container pad="17rem 0 10rem 0" padm="12rem 0 6rem 0">
      <IntroContainer>
        <Col1>
          <h4>About us</h4>
          <h1>Our designs solve problems</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Col1>
        <Col2>
          <img src={group} alt="group of people sitting down" />
        </Col2>
      </IntroContainer>
    </Container>
  );
};

export default Intro;
