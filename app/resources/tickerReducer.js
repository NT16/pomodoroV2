function tickerReducer(state, action) {
  switch (action.type) {
    case "START":
      console.log("start fired");
      return {
        ...state,
        startClicked: true,
        done: false,
      };
    case "RESET":
      console.log("reset fired");
      return {
        ...state,
        done: false,
        startClicked: false,
      };
    case "TIMER_END":
      console.log("timer end fired");
      return {
        ...state,
        done: true,
      };
    case "SET_WORK":
      console.log("set work fired");
      return {
        ...state,
        work: action.data,
      };
    case "SET_SHORT_BREAK":
      return {
        ...state,
        shortBreak: action.data,
      };
    case "SET_BREAK":
      return {
        ...state,
        break2: action.data,
      };

    case "CHANGE_TO_SELECTED_FAVORITE":
      console.log("change selected fav fired");
      return {
        ...state,
        work: action.data[0],
        shortBreak: action.data[1],
        break2: action.data[2],
      };
    case "SAVE_TO_FAVORITES":
      console.log("save to fav fired");
      return {
        ...state,
        favorites: [
          ...state.favorites,
          [state.work, state.shortBreak, state.break2],
        ],
      };
    case "DELETE_FROM_FAVORITES":
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, action.data),
          ...state.favorites.slice(action.data + 1),
        ],
      };
    default:
      return state;
  }
}

export default tickerReducer;
