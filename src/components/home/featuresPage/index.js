import React from "react";

import {
  FeaturesPageContainer,
  Features,
  Feature,
  Content,
} from "./featuresPageStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import featuresData from "../../../data/featuresPageData";

const FeaturesPage = () => {
  return (
    <BackdropContainer>
      <Container pad="10rem 1rem 10rem 1rem">
        <FeaturesPageContainer>
          <div data-aos="fade-up" className="title">
            <p>Features</p>
            <h1>Design that solves problems, one product at a time</h1>
          </div>
          <Features>
            {featuresData.map((feature, index) => (
              <Feature key={index} data-aos="zoom-out">
                <Content>
                  <img src={feature.icon} alt={feature.title} />
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </Content>
              </Feature>
            ))}
          </Features>
        </FeaturesPageContainer>
      </Container>
    </BackdropContainer>
  );
};

export default FeaturesPage;
