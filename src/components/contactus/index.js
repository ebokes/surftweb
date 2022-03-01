import React from "react";
import { Container } from "../../reuseableComponents/containerStyle";
import {
  ContactUsContainer,
  Row1,
  Row2,
  Textarea,
  SubmitBtn,
  InputField,
  FormField,
} from "./contactUsStyle";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      context: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      email: Yup.string()
        .email("Invalid Email")
        // .max(15, "Must be 15 characters or less")
        .required("*Required"),
      context: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      subject: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      message: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
    }),
    onSubmit: (values) => console.log(values),
  });
  console.log(formik.errors);
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
          <FormField onSubmit={formik.handleSubmit}>
            <InputField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </InputField>
            <InputField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
            </InputField>
            <InputField>
              <label htmlFor="context">Context</label>
              <input
                type="text"
                name="context"
                id="context"
                placeholder="Provide context"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.context}
              />
              {formik.touched.context && formik.errors.context ? (
                <p>{formik.errors.context}</p>
              ) : null}
            </InputField>
            <InputField>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Select subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p>{formik.errors.subject}</p>
              ) : null}
            </InputField>
            <Textarea>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Write your question(s) here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.subject && formik.errors.subject ? (
                <p>{formik.errors.subject}</p>
              ) : null}
            </Textarea>
            <SubmitBtn type="submit">Send Message</SubmitBtn>
          </FormField>
        </Row2>
      </ContactUsContainer>
    </Container>
  );
};

export default Contact;
