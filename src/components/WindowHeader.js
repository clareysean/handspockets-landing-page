import React from "react";
import PropTypes from "prop-types";
export default function WindowHeader({ windowTitle, className }) {
  return (
    <div>
      <button className="xButton">X</button>
      <header className={className}>{windowTitle}</header>
    </div>
  );
}

WindowHeader.propTypes = {
  windowTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
