import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "./components/Timer";
import "./Tenzies.css";
/*

Track the time it took to win
Save your best time ot localstorage.
check other held dice and see if they match the one that was clicked. If not change to red dice
*/
export default function Tenzies() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const getBestTime = () => {
    const bestTimeFromStorage = localStorage.getItem("bestTime");
    return bestTimeFromStorage ? formatTime(bestTimeFromStorage) : 86400;
  };

  const getBestRoll = () => {
    const bestRollFromStorage = localStorage.getItem("bestRoll");
    return bestRollFromStorage ? bestRollFromStorage : 100;
  };

  const [bestScores, setBestScores] = useState({
    bestTime: getBestTime(),
    bestRoll: getBestRoll(),
  });

  const handleStart = () => {
    setStartTimer(true);
  };

  const handleStop = () => {
    setStartTimer(false);
  };

  const handleTotalTime = (time) => {
    setTotalTime(time);
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);

      //check between total time and best time.  If total time is better than best time update best time.
      if (totalTime < bestScores.bestTime) {
        setBestScores((oldScores) => ({ ...oldScores, bestTime: totalTime }));
        localStorage.setItem("bestTime", totalTime);
      }

      if (count < bestScores.bestRoll) {
        setBestScores((oldScores) => ({ ...oldScores, bestRoll: count }));
        localStorage.setItem("bestRoll", count);
      }
      handleStop();
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!startTimer) {
      handleStart();
    }
    if (!tenzies) {
      setCount((oldCount) => oldCount + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setCount((oldCount) => (oldCount = 0));
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="mt-5 mb-5">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div>
        <Row
          xs={1}
          sm={1}
          md={1}
          xl={1}
          xxl={1}
        >
          <Col>
            <h6>
              <b>Best Time: </b>
              {getBestTime() === 86400 ? "Play for best time." : getBestTime()}
            </h6>
          </Col>
          <Col>
            <h6>
              <b>Best Roll: </b>
              {getBestRoll() === 100 ? "Play for best roll." : getBestRoll()}
            </h6>
          </Col>
        </Row>
      </div>
      <div>
        <h3>Number of rolls: {count}</h3>
        <Timer
          start={startTimer}
          onTotalTime={handleTotalTime}
        />
      </div>
      <Container className="dice-container ">
        {" "}
        <Row
          className="justify-content-center "
          xs={3}
          sm={3}
          md={5}
          xl={5}
          xxl={5}
        >
          {diceElements}
        </Row>
      </Container>
      <button
        className="roll-dice btn-animate"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
