import React from "react";
import { useState } from "react";
import WindowHeader from "./WindowHeader";
import Draggable from "react-draggable";
import Links from "./Links";

export default function RightWindow() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClick() {
    setIsHidden((prevState) => !prevState);
  }
  return (
    <Draggable handle=".window-header">
      <div className={isHidden ? "right-container-hidden" : "right-container"}>
        <WindowHeader
          className="window-header right"
          windowTitle="Handspockets-hot-links.exe"
          onClick={handleClick}
        />
        <Links />
      </div>
    </Draggable>
  );
}
