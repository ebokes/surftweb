import React from "react";
import { ContactFormContainer, Col1, Col2 } from "./ContactFormStyle";
import {
  //   BackdropContainer,
  Container,
} from "../../../reuseableComponents/containerStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { SubLink } from "../../../reuseableComponents/subLinkStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function ContactForm() {
  return (
    <Container>
      <ContactFormContainer>
        <Col1 data-aos="fade-left">
          <div>
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </Col1>
        <Col2 data-aos="fade-right">
          <div>
            <h5>Send inquiry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="url"
                name="designurl"
                id="designurl"
                placeholder="Paste you figma design URL"
              />
              <span></span>
              <Button to="/#" padding="1.6rem 0">
                Send an Inquiry
              </Button>
            </form>
            <SubLink to="/contact-us" color="#fff" mld="29%">
              Get in touch with us
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </SubLink>
          </div>
        </Col2>
      </ContactFormContainer>
    </Container>
  );
}

export default ContactForm;
