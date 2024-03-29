import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiEclipseide, SiMicrosoftonenote, SiPowershell, SiDigitalocean } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiEclipseide />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiVisualstudiocode />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiPowershell />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiDigitalocean />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
      >
        <SiMicrosoftonenote />
      </Col>
    </Row>
  );
}

export default Toolstack;
