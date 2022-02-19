import React from "react";
import logo0 from "../../../images/Logo-0.svg";
import logo1 from "../../../images/Logo-1.svg";
import logo2 from "../../../images/Logo-2.svg";
import logo3 from "../../../images/Logo-3.svg";
import logo4 from "../../../images/Logo-4.svg";
import logo5 from "../../../images/Logo-5.svg";
import {
  BenefitsSectionContainer,
  Benefits,
  Benefit,
  Content,
  Icons,
} from "./benefitsSectionStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import benefitsData from "../../../data/benefitsSectionData";

const BenefitsSection = () => {
  return (
    <Container>
      <BenefitsSectionContainer>
        <div className="title">
          <h1>The benefits of working with us</h1>
        </div>
        <Benefits>
          {benefitsData.map((benefits, index) => (
            <Benefit>
              <Content key={index}>
                <img src={benefits.icon} alt={benefits.title} />
                <h4>{benefits.title}</h4>
                <p>{benefits.text}</p>
              </Content>
            </Benefit>
          ))}
        </Benefits>
        <Icons>
          <img src={logo0} alt="logo" />
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
        </Icons>
      </BenefitsSectionContainer>
    </Container>
  );
};

export default BenefitsSection;