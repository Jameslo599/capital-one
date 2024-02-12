import "./styles/App.scss";
import MyHeaderView from "./view/MyHeaderView";
import MyBannerView from "./view/MyBannerView";
import AccountTileView from "./view/AccountTileView";
import ExploreTileView from "./view/ExploreTileView";
import TransactTileView from "./view/TransactTileView";
import CreditTileView from "./view/CreditTileView";
import KhanTileView from "./view/KhanTileView";
import ShoppingTileView from "./view/ShoppingTileView";
import MapTileView from "./view/MapTileView";
import MyFooterView from "./view/MyFooterView";

function App() {
  return (
    <div className="App">
      <MyHeaderView />
      <MyBannerView />
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
  );
}

export default App;
