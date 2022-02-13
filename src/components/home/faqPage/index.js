import React from "react";
import { Container } from "../../../reuseableComponents/containerStyle";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { FaqPageContainer, Col1, Col2 } from "./faqPageStyle";
import reviewsData from "../../../data/reviewsPageData";

function FaqPage() {
  const [toggle, setToggle] = React.useState(false);
  const toggleDrop = () => {
    setToggle((prevState) => !prevState);
  };
  return (
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
                  <div className="line"></div>
                </div>
              </div>
              <div className="toggle" onClick={toggleDrop}>
                {toggle ? <MdClose /> : <BiPlus />}
              </div>
            </div>
          ))}
        </Col2>
      </FaqPageContainer>
    </Container>
  );
}

export default FaqPage;
