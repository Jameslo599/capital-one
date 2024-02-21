import React, { useEffect, useState } from "react";
import "../styles/reset.scss";
import "../styles/App.scss";
import Loading from "./Loading";
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
    const personalize = async () => {
      try {
        const response = await fetch("/api");
        fetch("/api");
        const data = await response.json();
        setBackendData(data);
      } catch (e) {
        console.log(e);
      }
    };

    personalize();
  }, []);

  return (
    <div>
      {!backendData.length ? (
        <Loading />
      ) : (
        <div className="App">
          <MyHeaderView />
          <MyBannerView user={backendData[0].fname} />
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
