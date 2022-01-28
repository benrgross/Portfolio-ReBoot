import React, { useRef } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ro0g6b1",
        "template_qtiwxrk",
        form.current,
        "user_rX4SPIm1J7go41OthskTQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="contact__cont">
      <Form className="contact__form" onSubmit={sendEmail}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            ref={form}
            className="mb-3"
          >
            <Form.Label className="form__label">Name</Form.Label>
            <Form.Control type="text" name="user_name" />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            ref={form}
            className="mb-3"
          >
            <Form.Label className="form__label">Email</Form.Label>
            <Form.Control type="email" name="user_email" />
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label className="form__label">Subject</Form.Label>
          <Form.Control type="subject" name="subject" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form__label">Message</Form.Label>
          <Form.Control as="textarea" name="message" />
        </Form.Group>
        <Button
          className="contact__button btn-primary"
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
