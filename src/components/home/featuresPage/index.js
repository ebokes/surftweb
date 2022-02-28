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
      <Container>
        <FeaturesPageContainer>
          <div data-aos="fade-up" data-aos-duration="2000" className="title">
            <p>Features</p>
            <h1>Design that solves problems, one product at a time</h1>
          </div>
          <Features>
            {featuresData.map((feature, index) => (
              <Feature data-aos="zoom-out" data-aos-duration="2000">
                <Content key={index}>
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
