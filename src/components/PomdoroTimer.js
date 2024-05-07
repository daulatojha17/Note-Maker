import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          // Timer completed, handle the end of a Pomodoro session
          // For example, you can toggle between work and break sessions
          // or trigger any desired action.
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, minutes, seconds]);

  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "1rem",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </div>
      <div style={{ marginTop: "1rem" }}>
        {isRunning ? (
          <button
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#e1e1e1",
              cursor: "pointer",
            }}
            onClick={pauseTimer}
          >
            Pause
          </button>
        ) : (
          <button
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#e1e1e1",
              cursor: "pointer",
            }}
            onClick={startTimer}
          >
            Start
          </button>
        )}
        <button
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#e1e1e1",
            cursor: "pointer",
          }}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
