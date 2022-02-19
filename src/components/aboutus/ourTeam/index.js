import React from "react";
import { OurTeamContainer, Card, Title } from "./ourTeamStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import cardData from "../../../data/ourTeamData";

const OurTeam = () => {
  return (
    <BackdropContainer>
      <Container>
        <OurTeamContainer>
          <Title>
            <h2>Meet our team</h2>
          </Title>
          <Card>
            {cardData.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`avatar-${item.avatar}`} />
                <h4>{item.avatar}</h4>
                <p>{item.position}</p>
              </div>
            ))}
          </Card>
        </OurTeamContainer>
      </Container>
    </BackdropContainer>
  );
};

export default OurTeam;
