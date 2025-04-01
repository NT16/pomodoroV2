function deDuplicate(favourites, newFav) {
  const copyOfFavourites = [...favourites];
  for (let i = 0; i < copyOfFavourites.length; i++) {
    if (
      copyOfFavourites[i][0] === newFav[0] &&
      copyOfFavourites[i][1] === newFav[1] &&
      copyOfFavourites[i][2] === newFav[2]
    ) {
      //return false;
      console.log("duplicate found", copyOfFavourites[i], newFav);
      return copyOfFavourites;
    }
  }
  //return true;
  console.log("no duplicate found", copyOfFavourites, newFav);
  return [...copyOfFavourites, newFav];
}

function tickerReducer(state, action) {
  switch (action.type) {
    case "START":
      console.log("[REDUCER] start fired");
      return {
        ...state,
        startClicked: true,
        done: false,
      };
    case "RESET":
      console.log("[REDUCER] reset fired");
      return {
        ...state,
        done: false,
        startClicked: false,
      };
    case "TIMER_END":
      console.log("[REDUCER] timer end fired");
      return {
        ...state,
        done: true,
      };
    case "SET_WORK":
      console.log("[REDUCER] set work fired", action.data);
      return {
        ...state,
        work: action.data,
      };
    case "SET_SHORT_BREAK":
      console.log("[REDUCER] set short break", action.data);
      return {
        ...state,
        shortBreak: action.data,
      };
    case "SET_BREAK":
      console.log("[REDUCER] set break", action.data);
      return {
        ...state,
        break2: action.data,
      };
    case "SET_FAVORITES":
      console.log("[REDUCER] set favs", action.data);
      return {
        ...state,
        favorites: action.data,
      };
    case "CHANGE_TO_SELECTED_FAVORITE":
      console.log("[REDUCER] change selected fav fired");
      return {
        ...state,
        work: action.data[0],
        shortBreak: action.data[1],
        break2: action.data[2],
      };
    case "SAVE_TO_FAVORITES":
      console.log(
        "[REDUCER] save to fav fired",
        state.work,
        state.shortBreak,
        state.break2
      );
      //console.log("action.data", action.data);
      //console.log("current state.favorites", state.favorites);
      const sourceFav = action.data?.length > 1 ? action.data : state.favorites;
      //console.log("source fav", sourceFav);
      let newFavs = deDuplicate(sourceFav, [
        state.work,
        state.shortBreak,
        state.break2,
      ]);
      return {
        ...state,
        favorites: newFavs,
      };
    case "DELETE_FROM_FAVORITES":
      console.log("[REDUCER] delete fav fired");
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
