import React from "react";
import logo from "../images/logo.svg";
import ISorting from "../images/icons/i-sorting";
import Comments from "../images/icons/comments";

function MyHeaderView() {
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <a href="/home">
              <img className="logo" alt="capital one logo" src={logo}></img>
            </a>
          </div>
          <div className="header-support">
            <button>
              <Comments />
              <span className="supp-text">Need Help?</span>
            </button>
            <ISorting />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default MyHeaderView;
