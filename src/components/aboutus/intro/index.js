import React from "react";
import { IntroContainer, Col1, Col2 } from "./IntroStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import group from "../../../images/group-of-people-sitting.png";

const Intro = () => {
  return (
    <Container pad="20rem 0 10rem 0" padm="12rem 0 6rem 0">
      <IntroContainer>
        <Col1 data-aos="fade-up">
          <h4>About us</h4>
          <h1>Our designs solve problems</h1>
          <p>
            With the expertise of our dedicated team, surftweb takes your
            business to a whole new level by blending innovative tactics that
            provide digital experiences like no other.
          </p>
        </Col1>
        <Col2 data-aos="fade-left">
          <img src={group} alt="group of people sitting down" />
        </Col2>
      </IntroContainer>
    </Container>
  );
};

export default Intro;
