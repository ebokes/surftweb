import React from "react";
import { WorkpageContainer, Col1 } from "./workPageStyle";

function WorkPage() {
  return (
    <WorkpageContainer>
      <Col1>
        <h1>How we work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <a href="/contactus">Get in touch with us</a>
      </Col1>
    </WorkpageContainer>
  );
}

export default WorkPage;
