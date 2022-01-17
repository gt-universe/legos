import React from "react";
import ButtonTypes from "./types/ButtonTypes";
import "./Button.scss";
const Button = (props: ButtonTypes) => {
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <button className="btn">{props.caption}</button>
    </>
  );
};

export default Button;
