import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../images/logo.svg";
import ArrowLeft from "../../images/icons/arrow-left";

function MyHeaderView({ logoEnd, headerSupport }) {
  const params = useParams();
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(logoEnd);
  };

  return (
    <div>
      <header className="header">
        <nav>
          {params.bank ? (
            <div
              className="nav-arrow"
              onClick={() => navigate(`/home/${params.username}`)}
            >
              <ArrowLeft />
            </div>
          ) : null}
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
