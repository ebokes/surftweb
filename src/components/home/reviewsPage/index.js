import React from "react";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { ReviewsPageContainer, Col1, Col2 } from "./reviewsPageStyle";
// import woman from "../../../images/woman.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import reviewsData from "../../../data/reviewsPageData";

function ReviewsPage({ item }) {
  const [reviewSlider, setReviewSlider] = React.useState(0);

  const nextSlide = () => {
    setReviewSlider(() =>
      reviewSlider === item.length - 1 ? 0 : item.length + 1
    );
  };
  const prevSlide = () => {
    setReviewSlider((reviewSlider) =>
      reviewSlider === 0 ? item.length - 1 : reviewSlider - 1
    );
  };
  // console.log(reviewSlider);

  return (
    <BackdropContainer bg="#F4F6FC80">
      <Container>
        <ReviewsPageContainer>
          <Col1>
            <h1>What our clients say about us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </Col1>
          <div className="right">
            <GoChevronLeft
              color="#28293999"
              size={36}
              className="left-arrow"
              onClick={prevSlide}
            />
            <IoIosArrowDroprightCircle
              color="#5239FA"
              size={48}
              className="right-arrow"
              onClick={nextSlide}
            />
          </div>
          <Col2>
            {reviewsData.map((item, index) => (
              <div
                className={index === reviewSlider ? "slide active" : "slide"}
                key={index}
              >
                {/* {index === reviewSlider && (
                  <> */}
                <h1>"{item.text}"</h1>
                <div>
                  <div className="left">
                    <div className="img-container">
                      <img src={item.img} alt="woman" />
                    </div>
                    <div className="text-container">
                      <h5>{item.name}</h5>
                      <p>{item.position}</p>
                    </div>
                  </div>
                </div>
                {/* </> */}
                {/* )} */}
              </div>
            ))}
          </Col2>
        </ReviewsPageContainer>
      </Container>
    </BackdropContainer>
  );
}

export default ReviewsPage;
