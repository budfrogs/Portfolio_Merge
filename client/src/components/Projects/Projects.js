import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieImg from "../../Assets/Projects/movie.webp";
import tenzieImg from "../../Assets/Projects/tenzies.webp";

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="brown-text">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={movieImg}
              isBlog={false}
              title="Movie Search"
              description="Movie search page demonstrating the use of React.js and MongoDB"
              ghLink="https://github.com/budfrogs/portfolio_mernstack"
              demoLink={"/movie"}
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={tenzieImg}
              isBlog={false}
              title="Tenzies Dice Game"
              description="This is the Tenzies Dice Game.  This project was part of a react course on Scrimba."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/tenzies"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
