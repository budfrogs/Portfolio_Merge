import React from "react";
import Card from "react-bootstrap/Card";
import { GiGardeningShears, GiBlackBook, GiBoatFishing, GiDutchBike } from "react-icons/gi";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,
            <br />I am <span className="brown-text">James Smith</span>. I grew up on a farm in <span className="brown-text">Wisconsin</span>. After
            highschool I joined the <span className="brown-text">Navy</span> and after 10 years I started my first civilian job with a Defense
            Contractor working on <span className="brown-text">Department of Defense (DOD)</span> contracts.
            <br />
            <br />
            My first DOD job was using my electrical background training from the Navy. During this time, I was going to night school working on my
            <span className="brown-text"> computer science degree</span>. I eventually moved to a new position where I could use my Navy electrical
            background and my new programming knowledge. I wrote basic flat file parsing routines to ingest data into various programs for analysis. I
            also installed navigation systems on <span className="brown-text">foreign diesel submarines</span> around the world.
            <br />
            <br />I eventually moved on to another company where I started my first web development position. Here I grew into a{" "}
            <span className="brown-text">Lead Developer</span> and a<span className="brown-text">Program Manager</span> for DOD contracts. I also
            completed a <span className="brown-text">BGS degree at Eastern Connecticut State University!</span>
            <br />
            <br />
            While a lead developer, I developed my skills as a <span className="brown-text">full stack developer</span>. Working with various
            languages and frameworks to include:
            <span className="brown-text"> Classic ASP, HTML5, CSS, Bootstrap, JavaScript, jQuery, and Java</span>. As lead developer, I periodically
            took on <span className="brown-text">Database Administration</span> work during staffing shortages. Through this experience I gained a lot
            of knowledge from managing the front in the middleware and the backend software.
            <br />
            <br />
            As a <span className="brown-text">Program Manager</span>, I managed 5 DOD contracts. I was also responsible for the staff on each
            contract. I was required to manage{" "}
            <span className="brown-text">program risk, scheduling, cost, planning, budgeting, and program reviews</span>.
            <br />
            <br />
            When I am not coding, I enjoy other activities!
          </p>
          <ul>
            <li className="about-activity">
              <GiDutchBike /> Mountain Biking
            </li>
            <li className="about-activity">
              <GiGardeningShears /> Working on my property including gardening
            </li>
            <li className="about-activity">
              <GiBlackBook /> Reading Science Fiction and Fantasy
            </li>
            <li className="about-activity">
              <GiBoatFishing /> Fishing
            </li>
          </ul>

          <p style={{ color: "rgb(218 87 241)" }}>"Enjoy life more by learning to take time and reflect on the past." </p>
          <footer className="blockquote-footer">SmithJE</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
