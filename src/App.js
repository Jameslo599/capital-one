import "./App.scss";
import logo from "./images/logo.svg";
import ISorting from "./images/icons/i-sorting";
import Comments from "./images/icons/comments";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyBanner />
      <section className="tile-layout">
        <AccountTile />
      </section>
    </div>
  );
}

function MyHeader() {
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <a href="#">
              <img className="logo" alt="capital one logo" src={logo}></img>
            </a>
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

function MyBanner() {
  return (
    <div className="banner">
      <p>
        2023 tax forms will be available by January 31st.{" "}
        <a href="#">Learn more.</a>
      </p>
    </div>
  );
}

function AccountTile() {
  return (
    <div>
      <div className="account-tile">
        <div>
          <div className="account-main">
            <span>
              360 Checking <span>...9473</span>
            </span>
            <div>
              <span>$</span>0<span>00</span>
            </div>
            <span>AVAILABLE BALANCE</span>
          </div>
          <button className="account-button">View Account</button>
        </div>
        <div className="account-balance">
          <div>
            <span>$0.00</span>
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

export default App;
