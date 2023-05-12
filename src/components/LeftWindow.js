import React from "react";
import { useState } from "react";
import Gif from "./Gif";
import WindowHeader from "./WindowHeader";
import Draggable from "react-draggable";

export default function LeftWindow() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClick() {
    setIsHidden((prevState) => !prevState);
  }
  return (
    <Draggable handle=".window-header">
      <div className={isHidden ? "left-container-hidden" : "left-container"}>
        <WindowHeader
          className="window-header"
          windowTitle="Rotating-pig.gif"
          onClick={handleClick}
        />
        <Gif />
      </div>
    </Draggable>
  );
}
