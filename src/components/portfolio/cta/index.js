import React from "react";
import { Col } from "./ctaStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";

const LandingPage = () => {
  return (
    <div>
      <Container pad="0 0 8rem 0">
        <Col>
          <h1>Let's build something great together</h1>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <Button href="/contact-us">Contact Us</Button>
        </Col>
      </Container>
    </div>
  );
};
export default LandingPage;
