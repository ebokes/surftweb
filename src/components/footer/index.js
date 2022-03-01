import React from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import { FooterContainer, Col1, Col2, Contact, Bottom } from "./footerStyle";
import { SocialStyle, Handle } from "../../reuseableComponents/subLinkStyle";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function FooterPage() {
  return (
    <BackdropContainer bg="#1C1E53">
      <Container pad="10rem 0 0 0" padm="5rem 0 0 0">
        <FooterContainer>
          <Col1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div>
              <h2>Surftweb</h2>
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
          </Col1>
          <Col2>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <h1>Lets Talk!</h1>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
            </div>
            <SocialStyle
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <Handle href="https://facebook.com" target="_blank">
                <MdFacebook size={25} />
              </Handle>
              <Handle href="https://twitter.com" target="_blank">
                <FaTwitter size={25} />
              </Handle>
              <Handle href="https://instagram.com" target="_blank">
                <FaInstagram size={25} />
              </Handle>
              <Handle href="https://linkedin.com" target="_blank">
                <FaLinkedin size={25} />
              </Handle>
            </SocialStyle>
          </Col2>
        </FooterContainer>
        <Bottom
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <Contact>
            <div>
              <h5>Email me at</h5>
              <p>info@surftweb.com</p>
            </div>
            <div>
              <h5>Call us on</h5>
              <p>0927 6277 28525</p>
            </div>
          </Contact>
          <div>
            <p>&copy; Copyright 2022, surftweb.com</p>
          </div>
        </Bottom>
      </Container>
    </BackdropContainer>
  );
}

export default FooterPage;
