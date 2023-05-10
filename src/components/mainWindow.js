import React from "react";
import Draggable from "react-draggable";
import WindowHeader from "../components/WindowHeader";
import Links from "../components/links";
import Gif from "../components/gif";
export default function MainWindow() {
  return (
    <>
      <div className="page-container">
        <Draggable handle=".window-header">
          <div className="left-container">
            <WindowHeader
              className="window-header"
              windowTitle="Rotating-pig.gif"
            />
            <Gif />
          </div>
        </Draggable>
        <Draggable handle=".window-header">
          <div className="right-container">
            <WindowHeader
              className="window-header right"
              windowTitle="Handspockets-hot-links.exe"
            />
            <Links />
          </div>
        </Draggable>
      </div>
    </>
  );
}
