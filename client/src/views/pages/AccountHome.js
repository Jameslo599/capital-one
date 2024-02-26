import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyBannerView from "../components/MyBannerView";
import AccountTileView from "../components/AccountTileView";
import ExploreTileView from "../components/ExploreTileView";
import TransactTileView from "../components/TransactTileView";
import CreditTileView from "../components/CreditTileView";
import KhanTileView from "../components/KhanTileView";
import ShoppingTileView from "../components/ShoppingTileView";
import MapTileView from "../components/MapTileView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../primatives/HeaderSupport";
import HelpButton from "../primatives/HelpButton";

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
  }, [navigate, params.username]);

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
          <MyHeaderView
            headerSupport={
              <HeaderSupport
                helpButton={<HelpButton />}
                signText={""}
                link={""}
              />
            }
            logoEnd={0}
          />
          <MyBannerView
            user={
              backendData.fname[0].toUpperCase() + backendData.fname.slice(1)
            }
          />
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
