import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ISorting from "../../images/icons/i-sorting";

function HeaderSupport({ helpButton = "", signText, link = "/" }) {
  const [dropDown, setDropDown] = useState(false);
  const params = useParams();

  const count = () => {
    !dropDown ? setDropDown(true) : setDropDown(false);
  };

  return (
    <div className="support-container">
      <div className="header-support">
        {helpButton}

        {!params.username ? (
          <Link to={link} className="link" onClick={count}>
            <ISorting />
            <span>{signText}</span>
          </Link>
        ) : (
          <div onClick={count}>
            <ISorting />
          </div>
        )}
      </div>
      {dropDown && (
        <div className="drop-down">
          <ul>
            <li>Profile</li>
            <li>Security</li>
            <li>Sign out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderSupport;
