import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function AccountTileView({ balance }) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <div className="account-tile">
        <div>
          <div className="account-main">
            <span>
              360 Checking <span>...9473</span>
            </span>
            <div>
              <span>$</span>
              {balance}
              <span>00</span>
            </div>
            <span>AVAILABLE BALANCE</span>
          </div>
          <button
            className="account-button"
            onClick={() =>
              navigate(`/home/${params.username}/${btoa(params.username)}`)
            }
          >
            View Account
          </button>
        </div>
        <div className="account-balance">
          <div>
            <div>
              <span>$</span>
              {balance}
              <span className="decimal">.</span>
              <span>00</span>
            </div>
            <span>CURRENT BALANCE</span>
          </div>
        </div>
      </div>
      <div className="account-skip">
        Skip the password -{" "}
        <a href="#">
          access your account info with face or fingerprint id when you use the
          mobile app.
        </a>
      </div>
    </div>
  );
}

export default AccountTileView;
