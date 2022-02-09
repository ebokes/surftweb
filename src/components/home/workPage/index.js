import React from "react";
import { WorkPageContainer, Col1, Col2, List } from "./workPageStyle";
import workData from "../../../data/workPageData";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function WorkPage() {
  return (
    <BackdropContainer>
      <Container>
        <WorkPageContainer>
          <Col1>
            <h1>How we work</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="/contactus">
              Get in touch with us
              <HiOutlineArrowNarrowRight />
            </a>
          </Col1>
          <Col2>
            {workData.map((item) => (
              <List>
                <div className="vector">
                  <div className="block3">
                    <div className="block2">
                      <div className="block1">
                        <p>0{item.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="writeup">
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
