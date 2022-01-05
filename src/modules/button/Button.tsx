import React from "react";
import ButtonTypes from "./types/ButtonTypes";

const Button: React.FC<ButtonTypes> = (props) => {
  return (
    <>
      <button>{props.caption}</button>
    </>
  );
};

export default Button;
