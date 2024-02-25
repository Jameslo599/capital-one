import React from "react";
import { Link } from "react-router-dom";
import ISorting from "../../images/icons/i-sorting";

function HeaderSupport({ helpButton = "", signText, link = "/" }) {
  return (
    <div className="header-support">
      {helpButton}
      <Link to={link} className="link">
        <ISorting />
        <span>{signText}</span>
      </Link>
    </div>
  );
}

export default HeaderSupport;
