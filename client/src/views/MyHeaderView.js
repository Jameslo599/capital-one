import React from "react";
import logo from "../images/logo.svg";
import ISorting from "../images/icons/i-sorting";
import Comments from "../images/icons/comments";
import { Link, useNavigate } from "react-router-dom";

function MyHeaderView() {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <Link onClick={refreshPage}>
              <img className="logo" alt="capital one logo" src={logo}></img>
            </Link>
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
