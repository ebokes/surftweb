import React from "react";
import { WhoWeAreContainer, Col1, Col2, Row1, Row2 } from "./whoWeAreStyle";
import { Container } from "../../../reuseableComponents/containerStyle";

const WhoWeAre = () => {
  return (
    <Container>
      <WhoWeAreContainer>
        <div>
          <h4 data-aos="fade-right" data-aos-duration="2000">
            Who we are
          </h4>
          <Row1>
            <Col1 data-aos="fade-right">
              <h2>Goal focused</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col1>
            <Col2 data-aos="fade-left" data-aos-once="true">
              <h2>Continuous improvement</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col2>
          </Row1>
        </div>
        <Row2 data-aos="zoom-in" data-aos-once="true" />
      </WhoWeAreContainer>
    </Container>
  );
};

export default WhoWeAre;
