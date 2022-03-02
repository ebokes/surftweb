import React from "react";
import { OurTeamContainer, Card, Title, Caption, Avatar } from "./ourTeamStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import cardData from "../../../data/ourTeamData";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <BackdropContainer>
      <Container>
        <OurTeamContainer>
          <Title data-aos="fade-right">
            <h2>Meet our team</h2>
          </Title>
          <Card>
            {cardData.map((item, index) => (
              <div data-aos="flip-left" className="figure" key={index}>
                <Avatar>
                  <img src={item.img} alt={`avatar-${item.avatar}`} />
                  <Caption>
                    <div>
                      <MdFacebook className="social" color="#fff" size={20} />
                      <FaTwitter className="social" color="#fff" size={20} />
                      <FaLinkedin className="social" color="#fff" size={20} />
                    </div>
                  </Caption>
                </Avatar>
                <h4 data-aos="fade-up">{item.avatar}</h4>
                <p data-aos="fade-up">{item.position}</p>
              </div>
            ))}
          </Card>
        </OurTeamContainer>
      </Container>
    </BackdropContainer>
  );
};

export default OurTeam;
