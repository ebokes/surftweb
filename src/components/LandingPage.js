import React from "react";
import {
  StyledLandingPage,
  Left,
  Right,
  Row,
} from "../styles/LandingPage.styled";
import { Container } from "../styles/Container.styled";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import illustration from "../assets/images/Illustration.svg";

const LandingPage = () => {
  return (
    <div>
      <StyledLandingPage>
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
                  <a href="/viewourwork">View our work</a>
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
      </StyledLandingPage>
    </div>
  );
};
export default LandingPage;
