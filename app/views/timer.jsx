import React, { useState, useEffect } from "react";

const Timer = ({ cycle, onTimerDone }) => {
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);

  const rep = Math.floor(index / 2) + 1;
  const isWork = index % 2 === 0;

  useEffect(() => {
    let minutes_timeout;

    if (time === cycle[index]) {
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
        <div className="row mb-1 ">
          <span className="col-4 bold">Rep {rep}</span>
          <div className="col-8 bold">
            {isWork ? (
              <span className="slide-left">Working</span>
            ) : (
              <span className="shake-horizontal">Break time</span>
            )}
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
