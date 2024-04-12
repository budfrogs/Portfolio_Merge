import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
    >
      <Row className="m-0 p-0">
        <Col
          md="4"
          className="footer-name"
        >
          <span>Designed and Developed by Soumyajit Behera</span>
        </Col>
        <Col
          md="4"
          className="footer-copywright"
        >
          <span>Copyright © {year} SB</span>
        </Col>
        <Col
          md="4"
          className="footer-body"
        >
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="gitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="m-0 p-0">
        <Col
          md="4"
          className="footer-name"
        >
          <span>Modified and Implemented by James Smith</span>
        </Col>
        <Col></Col>
        <Col
          md="4"
          className="footer-body"
        >
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/budfrogs"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/james-smith-b3781512/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/budfrogs/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
