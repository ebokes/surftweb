import React from "react";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";

import { ReviewsPageContainer, Col1, Col2 } from "./reviewsPageStyle";

function ReviewsPage() {
  return (
    <BackdropContainer>
      <Container>
        <ReviewsPageContainer>
          <Col1>
            <h1>What our clients say about us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </Col1>
          <Col2>
            <div>
              <h1>
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </h1>
            </div>
          </Col2>
        </ReviewsPageContainer>
      </Container>
    </BackdropContainer>
  );
}

export default ReviewsPage;
