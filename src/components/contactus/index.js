import React from "react";
import { Container } from "../../reuseableComponents/containerStyle";
import {
  ContactUsContainer,
  Row1,
  Row2,
  Input,
  Textarea,
  SubmitBtn,
  InputField,
} from "./contactUsStyle";

const index = () => {
  return (
    <Container pad="17rem 0 10rem 0" padm="12rem 0 6rem 0">
      <ContactUsContainer>
        <Row1>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </Row1>
        <Row2>
          <InputField action="">
            <Input>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </Input>
            <Input>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </Input>
            <Input>
              <label htmlFor="context">Context</label>
              <input
                type="text"
                name="context"
                id="context"
                placeholder="Provide context"
              />
            </Input>
            <Input>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Select subject"
              />
            </Input>
            <Textarea>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write your question here"
              ></textarea>
            </Textarea>
            <SubmitBtn type="button" value="Send Message" />
          </InputField>
        </Row2>
      </ContactUsContainer>
    </Container>
  );
};

export default index;
