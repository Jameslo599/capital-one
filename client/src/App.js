import React, { useEffect, useState } from "react";
import "./styles/reset.scss";
import "./styles/App.scss";
import MyHeaderView from "./views/MyHeaderView";
import MyBannerView from "./views/MyBannerView";
import AccountTileView from "./views/AccountTileView";
import ExploreTileView from "./views/ExploreTileView";
import TransactTileView from "./views/TransactTileView";
import CreditTileView from "./views/CreditTileView";
import KhanTileView from "./views/KhanTileView";
import ShoppingTileView from "./views/ShoppingTileView";
import MapTileView from "./views/MapTileView";
import MyFooterView from "./views/MyFooterView";

function App() {
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
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="App">
          <MyHeaderView />
          <MyBannerView />
          <section className="tile-layout">
            <div className="widgets-1">
              <AccountTileView user={backendData[0].user} />
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

export default App;
