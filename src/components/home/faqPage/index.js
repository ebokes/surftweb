import React from "react";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { FaqPageContainer, Col1, Col2 } from "./faqPageStyle";
import reviewsData from "../../../data/reviewsPageData";

function FaqPage() {
  const [toggle, setToggle] = React.useState(false);
  const toggleDrop = () => {
    setToggle((prevState) => !prevState);
  };

  // const [id, setId] = React.useState(false);
  // const targetId = () => {
  //   setId(reviewsData.id.length === 1 ? !id : id);
  //   console.log(targetId());
  // };
  return (
    <BackdropContainer>
      <Container>
        <FaqPageContainer>
          <Col1>
            <h1>Frequently asked questions</h1>
            <a href="/contact">Contact us for more info</a>
          </Col1>
          <Col2>
            {reviewsData.map((review) => (
              <div key={review.id} className="question-container">
                <div className="no-quest">
                  <h4 className="sn">0{review.id}</h4>
                  <div className="quest-ans">
                    <h4 className="question">{review.question}</h4>
                    <p
                      onClick={toggleDrop}
                      className={toggle ? "answer" : "no-ans"}
                    >
                      {review.answer}
                    </p>
                  </div>
                </div>
                <div className="toggle" onClick={toggleDrop}>
                  {toggle ? <MdClose /> : <BiPlus />}
                </div>
              </div>
            ))}
            <hr />
            {/* <div className="question-container">
              <div className="no-quest">
                <h4 className="sn">01</h4>
                <div className="quest-ans">
                  <h4 className="question">How much time does it take?</h4>
                  <p
                    onClick={toggleDrop}
                    className={onClick ? "answer" : "no-ans"}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="toggle" onClick={toggleDrop}>
                {onClick ? <MdClose /> : <BiPlus />}
              </div>
            </div>
            <hr /> */}
            {/* <div className="content">
              <div className="question-container">
                <div className="no-quest">
                  <p>01</p>
                  <div className="quest-ans">
                    <h4 className="question">How much time does it take?</h4>
                  </div>
                </div>
                <div className="toggle" onClick={toggleDrop}>
                  {onClick ? "x" : "+"}
                </div>
              </div>
              <div className="answer-container">
                <p
                  onClick={toggleDrop}
                  className={onClick ? "answer" : "no-ans"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <hr /> */}
            {/* <div className="container">
              <div className="no-quest">
                <p>01</p>

                <div className="quest-ans">
                  <h4 className="question">How much time does it take?</h4>
                  <p className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              +
            </div> */}
          </Col2>
        </FaqPageContainer>
      </Container>
    </BackdropContainer>
  );
}

export default FaqPage;
