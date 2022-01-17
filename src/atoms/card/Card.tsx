import React from "react";
import CardTypes from "./types/CardTypes";

const Card: React.FC<CardTypes> = (props: CardTypes) => {
  const { isOpen } = props;
  return (
    <>
      <div>
        <div>
          Card Header <span> {isOpen ? "Close" : "Open"}</span>
        </div>
        <div>Card Body</div>
      </div>
    </>
  );
};


export default Card;