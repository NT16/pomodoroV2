import React from "react";
import DropdownButton from "react-bootstrap/cjs/DropdownButton.js";
import Dropdown from "react-bootstrap/cjs/Dropdown.js";

const FavoritesDropdownButton = ({
  favorites,
  onFavClick,
  onClose,
  classString,
}) => {
  const classes = "margin-left-2" + classString;
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Favorites"
      className={classes}
      variant="secondary">
      {favorites.map((e, index) => (
        <Dropdown.Item key={e.toString()}>
          <div className="fav-row">
            <span onClick={() => onFavClick(e)} className="fav-text">
              <span className="fav-labels">Work</span> : {e[0]} min. ,{" "}
              <span className="fav-labels">Breaks</span> : {e[1]}, {e[2]} min.
            </span>

            <button
              type="button"
              className="close fav-close"
              aria-label="Close"
              onClick={() => onClose(index)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default FavoritesDropdownButton;

/*
<div
      className={`relative inline-block text-left margin-left-2 ${classNameString}`}
      id="dropdown-basic-button">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true">
          Favorites
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon">
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1">
        <div className="py-1" role="none">
          {favorites.map((e, index) => (
            <div className="fav-row" key={e.toString()}>
              <span onClick={() => onFavClick(e)}>
                Work: {e[0]} min. , Breaks: {e[1]}, {e[2]} min.
              </span>

              <button
                type="button"
                className="close fav-close"
                aria-label="Close"
                onClick={() => onClose(index)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
*/
