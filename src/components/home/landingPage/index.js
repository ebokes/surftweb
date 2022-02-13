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
        <Container pad="17rem 0 10rem 0">
          <Row>
            <Left>
              <div>
                <h1>Building stellar websites for early startups</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <span className="grp">
                  <Button href="/viewourwork">View our work</Button>
                  <div>
                    <SubLink color="#fff" mlm="20%" mlt="1rem" href="/pricing">
                      View Pricing
                      <span>
                        <HiOutlineArrowNarrowRight size={30} />
                      </span>
                    </SubLink>
                  </div>
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
