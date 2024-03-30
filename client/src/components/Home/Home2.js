import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/people_dev.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a web developer.
              <br />I started a long time ago working on a Classic ASP website… 🤷‍♂️
              <br />
              <br />I have developed in several different languages and Frameworks.
              <i>
                <b className="blue"> Javascript, Java, VbScript, HTML and CSS </b>
              </i>
              <br />
              <br />I enjoy most performing full stack development. &nbsp;
              <i>
                <b className="blue">Building frontend and backend web interfaces. </b>
              </i>
              <br />
              <br />I enjoy learning new exciting technologies or interfaces. Most recently
              <i>
                <b className="blue"> modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Node.js</b>
              </i>
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
          >
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/budfrogs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/james-smith-b3781512/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/budfrogs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
