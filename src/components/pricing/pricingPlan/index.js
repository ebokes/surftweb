import React from "react";
import {
  PricingPlanContainer,
  Row1,
  Row2,
  Card,
  Price,
  Text,
  List,
  Content,
} from "./pricingPlanStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import priceData from "../../../data/pricingPlanData";
import { Button } from "../../../reuseableComponents/buttonStyle";

const PricingPlan = () => {
  return (
    <Container padm="12rem 0 5rem 0">
      <PricingPlanContainer>
        <Row1 data-aos="zoom-in" data-aos-once="true">
          <h2>Our Pricing Plans</h2>
          <p>
            Surftweb provides unmatched website design pricing packages for
            every business - par excellent designs, comprehensive features and
            great client servicing.
          </p>
        </Row1>
        <Row2>
          {priceData.map((card, index) => (
            <Card
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-once="true"
              key={index}
              style={{
                backgroundColor: index % 2 === 1 ? "#1C1E53" : "#F4F6FC",
                color: index % 2 === 1 && "#fff",
              }}
            >
              <Content data-aos="zoom-in" data-aos-once="true">
                <Price>
                  <span className="price-tag">${card.price}</span>
                  <span
                    style={{ color: index % 2 === 0 ? "#2405F2" : "#FCD980" }}
                  >
                    {card.rider}
                  </span>
                </Price>
                <Text>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Text>
                <List>
                  {card.bullet.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </List>
                <Button
                  to="contact-us"
                  padding="1rem 22%"
                  style={{
                    background: index % 2 === 0 && "#282938",
                    color: index % 2 === 0 && "#fff",
                    margin: "0 auto",
                  }}
                >
                  {card.btn}
                </Button>
              </Content>
            </Card>
          ))}
        </Row2>
      </PricingPlanContainer>
    </Container>
  );
};

export default PricingPlan;
