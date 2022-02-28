import React from "react";
import { Left, Right, Row } from "./landingPageStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import illustration from "../../../images/Illustration.svg";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { SubLink } from "../../../reuseableComponents/subLinkStyle";

const LandingPage = () => {
  return (
    <div>
      <BackdropContainer bg="#1C1E53" color="#fff">
        <Container pad="26rem 0 19rem 0" padm="12rem 0 5rem 0">
          <Row>
            <Left>
              <div data-aos="fade-up" data-aos-duration="2000">
                <h1>Building stellar websites for early startups</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <span className="grp">
                  <Button href="/portfolio">View our work</Button>
                  <div>
                    <SubLink
                      color="#fff"
                      mlm="20%"
                      mlt="1rem"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      href="/pricing"
                    >
                      View Pricing
                      <span>
                        <HiOutlineArrowNarrowRight size={30} />
                      </span>
                    </SubLink>
                  </div>
                </span>
              </div>
            </Left>
            <Right data-aos="fade-left" data-aos-duration="2000">
              <img src={illustration} alt="illustration" />
            </Right>
          </Row>
        </Container>
      </BackdropContainer>
    </div>
  );
};
export default LandingPage;
