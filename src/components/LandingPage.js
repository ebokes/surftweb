import React from "react";
import { Left, Right, Row } from "../styles/LandingPage.styled";
import { Container, BackdropContainer } from "../styles/Container.styled";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import illustration from "../assets/images/Illustration.svg";
import { Button } from "../styles/Button.styled";

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
