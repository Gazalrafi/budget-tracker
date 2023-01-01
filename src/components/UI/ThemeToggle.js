import React from "react";
import Button from "./Button";
import Model from "./Model";
const ThemeToggle = props => {
  return (
    <Model onClose={props.onClose}>
      <h3>Change Theme</h3>
      <Button onClick={props.onClick}>Change Theme</Button>
    </Model>
  );
};

export default ThemeToggle;
