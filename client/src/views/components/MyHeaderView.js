import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

function MyHeaderView({ logoEnd, headerSupport }) {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(logoEnd);
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
          {headerSupport}
        </nav>
      </header>
    </div>
  );
}

export default MyHeaderView;
