import React from "react";
import { Col } from "react-bootstrap";
import "./die.css";

const Pip = () => <span className="pip" />;

const Face = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <Col
      xs={4}
      sm={3}
      md={3}
      xl={2}
      className="m-0 p-0 "
    >
      <div
        style={styles}
        className="face mx-auto"
        onClick={props.holdDice}
      >
        {props.pips}
      </div>
    </Col>
  );
};

const Die = ({ isHeld, holdDice, value }) => {
  let pips = Number.isInteger(value)
    ? Array(value)
        .fill(0)
        .map((_, i) => <Pip key={i} />)
    : null;
  return (
    <Face
      pips={pips}
      holdDice={holdDice}
      isHeld={isHeld}
    ></Face>
  );
};

export default Die;
