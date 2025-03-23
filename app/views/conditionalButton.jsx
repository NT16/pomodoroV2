import React from "react";

const ConditionalButton = ({ condition, name, onClick, classString }) => {
  const classes = "btn btn-secondary btn-sm " + classString;
  const button = condition ? (
    <button className={classes} onClick={onClick}>
      {name}
    </button>
  ) : null;

  return button;
};

export default ConditionalButton;
