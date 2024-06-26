import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiJava, DiDocker, DiHtml5, DiCss3 } from "react-icons/di";
import { SiBootstrap, SiLinux, SiMicrosoftsqlserver, SiJquery, SiProxmox } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "25px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiJavascript1 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiJquery />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiReact />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiNodejs />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiJava />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiDocker />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiHtml5 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiCss3 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiGit />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiBootstrap />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiMicrosoftsqlserver />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <DiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiLinux />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiProxmox />
      </Col>
    </Row>
  );
}

export default Techstack;
