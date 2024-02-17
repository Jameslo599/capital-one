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

function Home() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {!backendData.length ? (
        <p>Loading...</p>
      ) : (
        <div className="App">
          <MyHeaderView />
          <MyBannerView user={backendData[0].user} />
          <section className="tile-layout">
            <div className="widgets-1">
              <AccountTileView />
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
