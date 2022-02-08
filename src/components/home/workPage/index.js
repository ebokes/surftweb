import React from "react";
import { WorkPageContainer, Col1, Col2, List } from "./workPageStyle";
import workData from "../../../data/workPageData";
import {
  Container,
  GreyBackdrop,
} from "../../../reuseableComponents/containerStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function WorkPage() {
  return (
    <GreyBackdrop>
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
                  <p>0{item.id}</p>
                </div>
                <h5>{item.heading}</h5>
                <p>{item.text}</p>
              </List>
            ))}
          </Col2>
        </WorkPageContainer>
      </Container>
    </GreyBackdrop>
  );
}

export default WorkPage;
