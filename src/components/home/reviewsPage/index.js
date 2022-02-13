import React from "react";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { ReviewsPageContainer, Col1, Col2 } from "./reviewsPageStyle";
import woman from "../../../images/woman.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";

function ReviewsPage() {
  return (
    <BackdropContainer bg="#F4F6FC80">
      <Container>
        <ReviewsPageContainer>
          <Col1>
            <h1>What our clients say about us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </Col1>
          <Col2>
            <h1>
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h1>
            <div>
              <div className="left">
                <div className="img-container">
                  <img src={woman} alt="" />
                </div>
                <div className="text-container">
                  <h5>Jenny Wilson</h5>
                  <p>Vice President</p>
                </div>
              </div>
              <div className="right">
                <GoChevronLeft color="#28293999" size={36} />
                <IoIosArrowDroprightCircle color="#5239FA" size={48} />
              </div>
            </div>
          </Col2>
        </ReviewsPageContainer>
      </Container>
    </BackdropContainer>
  );
}

export default ReviewsPage;
