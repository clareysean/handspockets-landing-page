import React from "react";
import PropTypes from "prop-types";

export default function LinkButton({ title, icon, href }) {
  function handleClick() {
    location.href = href;
  }

  return (
    <button className="link-button" title={title} onClick={handleClick}>
      {icon}
    </button>
  );
}
LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};
