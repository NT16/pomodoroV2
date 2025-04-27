import React, { useState, useEffect, useReducer, useMemo } from "react";
import { useSearchParams } from "react-router";
import Timer from "../views/timer.jsx";
import ConditionalButton from "../views/conditionalButton.jsx";
import DisplaySet from "../views/displaySet.jsx";
import DisplayModal from "../views/displayModal.jsx";
import FavoritesDropdownButton from "../views/favoritesDropdownButton.jsx";
import tickerReducer from "../resources/tickerReducer.js";
import initialState from "../resources/initialState.js";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const getCycle = (work, shortBreak, break2) => {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(work);
    arr.push(shortBreak);
  }
  let lastIndex = arr.length - 1;
  arr[lastIndex] = arr[lastIndex] + break2;

  return arr;
};

export default function Home() {
  const [ticker, dispatchTicker] = useReducer(tickerReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  let [searchParams] = useSearchParams();

  let calculatedCycle = useMemo(
    () => getCycle(ticker.work, ticker.shortBreak, ticker.break2),
    [ticker.work, ticker.shortBreak, ticker.break2]
  );

  function checkInputValidity(value, actionType) {
    if (!Number.isNaN(value)) {
      dispatchTicker({
        type: actionType,
        data: parseInt(value),
      });
    }
  }
  useEffect(() => {
    let storedFavs = JSON.parse(window.localStorage.getItem("fav"));
    if (storedFavs) {
      dispatchTicker({
        type: "SET_FAVORITES",
        data: storedFavs,
      });
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("work")) {
      checkInputValidity(searchParams.get("work"), "SET_WORK");
      checkInputValidity(searchParams.get("shortBreak"), "SET_SHORT_BREAK");
      checkInputValidity(searchParams.get("break2"), "SET_BREAK");

      if (searchParams.get("save") === "true") {
        let storedFavs = JSON.parse(window.localStorage.getItem("fav"));
        dispatchTicker({
          type: "SAVE_TO_FAVORITES",
          data: storedFavs,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (ticker.favorites.length > 1) {
      window.localStorage.setItem("fav", JSON.stringify(ticker.favorites));
    }
  }, [ticker.favorites]);

  const onStartClick = () => {
    console.log("event start");
    dispatchTicker({
      type: "START",
    });
  };

  const onResetClick = () => {
    console.log("reset");
    dispatchTicker({
      type: "RESET",
    });
  };

  const onFavClick = (item) => {
    dispatchTicker({
      type: "CHANGE_TO_SELECTED_FAVORITE",
      data: item,
    });

    dispatchTicker({
      type: "RESET",
    });
  };

  let deleteFav = () => {
    dispatchTicker({
      type: "DELETE_FROM_FAVORITES",
      data: deleteIndex,
    });
    setShowModal(false);
    setDeleteIndex(null);
  };

  const confirmModal = (index) => {
    setShowModal(true);
    setDeleteIndex(index);
  };

  const onTimerDone = () => {
    console.log("Pomodoro done");

    dispatchTicker({ type: "TIMER_END" });
  };

  return (
    <div className="content">
      {showModal && <DisplayModal setShow={setShowModal} onYes={deleteFav} />}

      <div className="text-center display-wrapper">
        <div className="controls time-setting-display">
          <DisplaySet
            work={ticker.work}
            shortBreak={ticker.shortBreak}
            break2={ticker.break2}
          />

          <div className="row center-jc buttons-row">
            <ConditionalButton
              condition={!ticker.startClicked}
              name="Start"
              onClick={onStartClick}
              classString=" control-btn"
            />

            <ConditionalButton
              condition={ticker.startClicked && !ticker.done}
              name="Cancel"
              onClick={onResetClick}
              classString="control-btn"
            />

            <ConditionalButton
              condition={ticker.done}
              name="Reset"
              onClick={onResetClick}
              classString="control-btn"
            />

            {!ticker.startClicked && ticker.favorites?.length !== 0 && (
              <FavoritesDropdownButton
                favorites={ticker.favorites}
                onFavClick={onFavClick}
                onClose={confirmModal}
                classString=" control-btn"
              />
            )}
          </div>
        </div>
        <>
          {ticker.done ? (
            <div>Done</div>
          ) : ticker.startClicked ? (
            <Timer cycle={calculatedCycle} onTimerDone={onTimerDone} />
          ) : null}
        </>
      </div>
    </div>
  );
}
