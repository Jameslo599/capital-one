import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ISorting from "../../images/icons/i-sorting";

function HeaderSupport({
  helpButton = "",
  signText,
  link = "/",
  signOut = "",
}) {
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
      {params.username && (
        <div className={`drop-down ${dropDown ? "show" : ""}`}>
          <ul>
            <li>
              <button className="account-list">Profile</button>
            </li>
            <li>
              <button className="account-list">Security</button>
            </li>
            <li>
              <button className="account-list" onClick={signOut}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderSupport;
