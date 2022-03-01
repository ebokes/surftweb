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
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
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
                  <li>{card.bullet[0]}</li>
                  <li>{card.bullet[1]}</li>
                  <li>{card.bullet[2]}</li>
                  <li>{card.bullet[3]}</li>
                  <li>{card.bullet[4]}</li>
                  <li style={{ display: card.bullet.length < 6 && "none" }}>
                    {card.bullet[5]}
                  </li>
                </List>
                <Button
                  href="#"
                  padding="1.6rem 22%"
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
