import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">James Smith </span>
            originally from a farm in<span className="blue"> Wisconsin.</span>
            <br />
            <br />
            Back in the day I went from farm boy to the Navy. I spent 10 years in the Navy. While, in the Navy I started studying Electrical
            Engineering but changed my Major to Computer Science. I completed{" "}
            <span className="blue">BGS degree at Eastern Connecticut State University</span>
            . Where I majored in Computer Science.
            <br />
            <br />
            I then worked for various defense contractors supporting the Navy. This is where I learned to program with various languages and
            frameworks.
            <br />
            <br />
            When not coding I enjoy other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on my property including gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Science Fiction and Fantasy
            </li>
            <li className="about-activity">
              <ImPointRight /> Fishing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Enjoy life more by learning to take time and reflect on the past." </p>
          <footer className="blockquote-footer">SmithJE</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
