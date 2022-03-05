import React from "react";
import { WorkPageContainer, Col1, Col2, List } from "./workPageStyle";
import workData from "../../../data/workPageData";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";

import { SubLink } from "../../../reuseableComponents/subLinkStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function WorkPage() {
  return (
    <BackdropContainer>
      <Container>
        <WorkPageContainer>
          <Col1 data-aos="fade-up">
            <h1>How we work</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <SubLink margin="0" href="/contact-us">
              Get in touch with us
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </SubLink>
          </Col1>
          <Col2>
            {workData.map((item, index) => (
              <List key={index}>
                <div data-aos="fade-left" className="vector">
                  <div className="block3">
                    <div className="block2">
                      <div className="block1">
                        <p>0{item.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className="writeup">
                  <h5>{item.heading}</h5>
                  <p>{item.text}</p>
                </div>
              </List>
            ))}
          </Col2>
        </WorkPageContainer>
      </Container>
    </BackdropContainer>
  );
}

export default WorkPage;
