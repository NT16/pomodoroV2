import React, { useState, useEffect } from "react";
import sound from "/Taptap.m4a";

const Timer = ({ cycle, onTimerDone }) => {
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [mute, setMute] = useState(false);

  const rep = Math.floor(index / 2) + 1;
  const isWork = index % 2 === 0;

  useEffect(() => {
    function playSound() {
      new Audio(sound).play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }

    let minutes_timeout;

    if (time === cycle[index]) {
      !mute && playSound();
      setTime(0);

      if (index < cycle.length - 1) {
        return setIndex((index) => index + 1);
      } else {
        //index has reached the last element of array cycle
        onTimerDone();
      }
    } else {
      minutes_timeout = setTimeout(() => {
        if (time < cycle[index]) {
          setTime((t) => t + 1);
        }
      }, 60000);
      console.log("setting interval :", minutes_timeout);
    }

    return () => {
      console.log("Clear interval :", minutes_timeout);
      clearTimeout(minutes_timeout);
    };
  }, [time, index, cycle]);

  return (
    <>
      <div className="ticker" data-testid="timer">
        <div className="tomato-bg ">
          <div className="minutes-done">
            <span className="timer-line-1" id="count-up">
              {time}
            </span>
          </div>

          <div className="timer-line-2 total-minutes">
            of {cycle[index]} minutes
          </div>
        </div>
      </div>

      <div className="display-set controls progress-display-set ">
        <div className="row mb-1 timer-display-header">
          <span className="col-4 bold">Rep {rep}</span>
          <div className="col-8 bold">
            {isWork ? (
              <span className="slide-left">Working</span>
            ) : (
              <span className="shake-horizontal">Break time</span>
            )}
            <button onClick={() => setMute((m) => !m)} className="mute">
              {mute ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-volume-mute-fill"
                  viewBox="0 0 16 16">
                  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-volume-up-fill"
                  viewBox="0 0 16 16">
                  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="row" id="work-list">
          <span className="col-4">Work</span>
          <div className="col-8">
            <span
              className={
                "checkbox-label " +
                (rep > 1 ? "checkbox-label--done" : "") +
                (rep === 1 && isWork ? "checkbox-label--inprogress" : "")
              }>
              1
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 2 ? "checkbox-label--done" : "") +
                (rep === 2 && isWork ? "checkbox-label--inprogress" : "")
              }>
              2
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 3 ? "checkbox-label--done" : "") +
                (rep === 3 && isWork ? "checkbox-label--inprogress" : "")
              }>
              3
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 4 ? "checkbox-label--done" : "") +
                (rep === 4 && isWork ? "checkbox-label--inprogress" : "")
              }>
              4
            </span>
          </div>
        </div>
        <div className="row" id="break-list">
          <span className="col-4">Break</span>
          <div className="col-8">
            <span
              className={
                "checkbox-label " +
                (rep > 1 ? "checkbox-label--done" : "") +
                (rep === 1 && !isWork ? "checkbox-label--inprogress" : "")
              }>
              1
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 2 ? "checkbox-label--done" : "") +
                (rep === 2 && !isWork ? "checkbox-label--inprogress" : "")
              }>
              2
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 3 ? "checkbox-label--done" : "") +
                (rep === 3 && !isWork ? "checkbox-label--inprogress" : "")
              }>
              3
            </span>
            <span
              className={
                "checkbox-label " +
                (rep > 4 ? "checkbox-label--done" : "") +
                (rep === 4 && !isWork ? "checkbox-label--inprogress" : "")
              }>
              4
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Timer;
