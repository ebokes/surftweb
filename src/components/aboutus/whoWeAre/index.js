import React from "react";
import { WhoWeAreContainer, Col1, Col2, Row1, Row2 } from "./whoWeAreStyle";
import {
  BackdropContainer,
  Container,
} from "../../../reuseableComponents/containerStyle";

const WhoWeAre = () => {
  return (
    <BackdropContainer bg="#f4f5f5">
      <Container>
        <WhoWeAreContainer>
          <h4>Who we are</h4>
          <Row1>
            <Col1>
              <h2>Goal focused</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col1>
            <Col2>
              <h2>Continuous improvement</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col2>
          </Row1>
          <Row2 />
        </WhoWeAreContainer>
      </Container>
    </BackdropContainer>
  );
};

export default WhoWeAre;
