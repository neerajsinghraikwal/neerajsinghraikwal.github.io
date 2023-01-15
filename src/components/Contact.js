import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="footer" id="contact">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/neerajsinghraikwal"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/neeraj-singh-b44906261/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:nsrneerajsingh2721@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <p style={{color:"white"}}>Email : nsrneerajsingh2721@gmail.com</p>
      <p style={{color:"white"}}>Mobile No : 63963699986</p>
    </Container>
  );
}

export default Contact;
