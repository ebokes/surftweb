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
                Our expert web developers aim to create engaging websites while
                providing a fun, easy and productive experience for you. To
                better comprehend your vision, our staff will attentively note
                and listen to your ideas and needs and help bring them to life.
              </p>
            </Col1>
            <Col2 data-aos="fade-left" data-aos-once="true">
              <h2>Our Philosophy</h2>
              <p>
                Before suggesting or providing any digital solution we take due
                diligence to understand our client's brand, their project and
                their target audience. Each piece is meticulously created and
                thoroughly examined to guarantee that it meets or exceeds
                expectations.
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
