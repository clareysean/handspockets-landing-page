import React from "react";
import LeftWindow from "./LeftWindow";
import RightWindow from "./RightWindow";

export default function MainWindow() {
  return (
    <>
      <div className="page-container">
        <LeftWindow />
        <RightWindow />
      </div>
    </>
  );
}
