import React, { useEffect, useState } from "react";
import "../styles/reset.scss";
import "../styles/App.scss";
import MyHeaderView from "./MyHeaderView";
import MyBannerView from "./MyBannerView";
import AccountTileView from "./AccountTileView";
import ExploreTileView from "./ExploreTileView";
import TransactTileView from "./TransactTileView";
import CreditTileView from "./CreditTileView";
import KhanTileView from "./KhanTileView";
import ShoppingTileView from "./ShoppingTileView";
import MapTileView from "./MapTileView";
import MyFooterView from "./MyFooterView";
import { useParams, useNavigate } from "react-router-dom";
import CircleAnim2 from "../images/icons/circle-anim-2";

function Home() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const personalize = async () => {
      try {
        const response = await fetch(`/api/user/${params.username}`);
        const data = await response.json();
        if (!data) return navigate("/");
        setBackendData(data);
      } catch (e) {
        setError(e);
      }
    };

    personalize();
  });

  return (
    <div>
      {!backendData ? (
        <div className="loading full-screen">
          <div>
            <div className="spinner-container">
              <CircleAnim2 />
            </div>
            <h1>Please Wait...</h1>
            {error && (
              <span>An error has occurred! Please refresh and try again.</span>
            )}
          </div>
        </div>
      ) : (
        <div className="App">
          <MyHeaderView />
          <MyBannerView user={backendData.fname} />
          <section className="tile-layout">
            <div className="widgets-1">
              <AccountTileView balance={backendData.balance} />
              <ExploreTileView />
              <TransactTileView />
            </div>
            <div className="widgets-2">
              <CreditTileView />
              <KhanTileView />
              <ShoppingTileView />
              <MapTileView />
            </div>
          </section>
          <MyFooterView />
        </div>
      )}
    </div>
  );
}

export default Home;
