import React from "react";
import { Container } from "../../reuseableComponents/containerStyle";
import { ContactUsContainer, Row1, Row2 } from "./contactUsStyle";

const index = () => {
  return (
    <Container pad="17rem 0 10rem 0" padm="12rem 0 6rem 0">
      <ContactUsContainer>
        <Row1>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </Row1>
        <Row2>
          <div></div>
        </Row2>
      </ContactUsContainer>
    </Container>
  );
};

export default index;
