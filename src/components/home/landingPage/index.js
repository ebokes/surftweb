import React from "react";
import { Left, Right, Row } from "./landingPageStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import illustration from "../../../images/Illustration.svg";
import { Button } from "../../../reuseableComponents/buttonStyle";

const LandingPage = () => {
  return (
    <div>
      <BackdropContainer>
        <Container>
          <Row>
            <Left>
              <div>
                <h1>Building stellar websites for early startups</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <span>
                  <Button href="/viewourwork">View our work</Button>
                  <a href="/pricing">
                    View Pricing <HiOutlineArrowNarrowRight size={30} />
                  </a>
                </span>
              </div>
            </Left>
            <Right>
              <img src={illustration} alt="illustration" />
            </Right>
          </Row>
        </Container>
      </BackdropContainer>
    </div>
  );
};
export default LandingPage;
