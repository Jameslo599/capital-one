import "./App.scss";
import logo from "./images/logo.svg";
import ISorting from "./images/icons/i-sorting";
import Comments from "./images/icons/comments";

function App() {
  return (
    <div className="App">
      <MyHeader />
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
              <span>Need Help?</span>
            </button>
            <ISorting />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
