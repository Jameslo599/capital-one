import "./App.scss";
import logo from "./images/logo.svg";

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
        </nav>
      </header>
    </div>
  );
}

export default App;
