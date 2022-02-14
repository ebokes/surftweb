import React from "react";
import { Container } from "../../../reuseableComponents/containerStyle";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { FaqPageContainer, Col1, Col2 } from "./faqPageStyle";
import reviewsData from "../../../data/reviewsPageData";

function FaqPage() {
  const [clickedIndex, setClickedIndex] = React.useState({});
  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <Container>
      <FaqPageContainer>
        <Col1>
          <h1>Frequently asked questions</h1>
          <a href="/contact">Contact us for more info</a>
        </Col1>
        <Col2>
          {reviewsData.map((item, index) => (
            <div key={item.id} className="question-container">
              <div className="no-quest">
                <h4 className="sn">0{item.id}</h4>
                <div className="quest-ans">
                  <h4 className="question">{item.question}</h4>
                  <p className={clickedIndex[index] ? "answer" : "no-ans"}>
                    {item.answer}
                  </p>
                  <div className="line"></div>
                </div>
              </div>
              <div className="toggle" onClick={handleClick(index)}>
                {clickedIndex[index] ? <MdClose /> : <BiPlus />}
              </div>
            </div>
          ))}
        </Col2>
      </FaqPageContainer>
    </Container>
  );
}

export default FaqPage;
