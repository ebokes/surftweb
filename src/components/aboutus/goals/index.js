import React from "react";
import { GoalsContainer, Col1, Col2, GoalsDataContainer } from "./goalsStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import goalsData from "../../../data/goalsSectionData";

const Goals = () => {
  return (
    <BackdropContainer bg="#EEF4FA">
      <Container>
        <GoalsContainer>
          {goalsData.map((item, index) => (
            <GoalsDataContainer
              data-aos="fade-up"
              data-aos-duration="2000"
              key={index}
              fld={index % 2 !== 0 && "row-reverse"}
            >
              <Col1>
                <h4>{item.tag}</h4>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </Col1>
              <Col2 data-aos="zoom-in" data-aos-duration="2000">
                <img src={item.img} alt="img" />
              </Col2>
            </GoalsDataContainer>
          ))}
        </GoalsContainer>
      </Container>
    </BackdropContainer>
  );
};

export default Goals;
