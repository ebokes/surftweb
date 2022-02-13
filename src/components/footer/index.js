import React from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import {
  FooterContainer,
  Col1,
  Col2,
  Contact,
  Social,
  Bottom,
} from "./footerStyle";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function FooterPage() {
  return (
    <BackdropContainer bg="#1C1E53">
      <Container pad="10rem 0 0 0">
        <FooterContainer>
          <Col1>
            <div>
              <h2>Surftweb</h2>
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
          </Col1>
          <Col2>
            <div>
              <h1>Lets Talk!</h1>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
            </div>
            <Social>
              <MdFacebook size={25} />
              <FaTwitter size={25} />
              <FaInstagram size={25} />
              <FaLinkedin size={25} />
            </Social>
          </Col2>
        </FooterContainer>
        <Bottom>
          <Contact>
            <div>
              <h5>Email me at</h5>
              <p>info@wsurftweb.com</p>
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
