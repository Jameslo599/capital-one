import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import cone from "../images/404.png";
import fdic from "../images/fdic.jpg";
import house from "../images/house.jpg";

function Login() {
  return (
    <div className="login">
      <div>
        <header className="header">
          <nav>
            <div>
              <Link to="/">
                <img className="logo" alt="capital one logo" src={logo}></img>
              </Link>
            </div>
          </nav>
        </header>
      </div>
      <section className="login">
        <div className="message-box">
          <div>
            <img src={logo} alt="capital one logo"></img>
          </div>
          <h1>Sign In</h1>
          <form>
            <div className="form-text">
              <label for="username">Username</label>
              <input type="text" name="username" id="username"></input>
            </div>
            <div className="form-text">
              <label for="password">Password</label>
              <input type="password" name="password" id="password"></input>
            </div>
            <div className="remember-me">
              <input type="checkbox" name="remember" id="remember"></input>
              <label for="remember">Remember Me</label>
            </div>
            <div className="login-button">
              <button>
                <Link to="/home">Sign In</Link>
              </button>
            </div>
          </form>
          <div className="forgot">
            <a>Forgot Username or Password?</a>
            <a>Set Up Online Access</a>
          </div>
        </div>
      </section>
      <div className="footer-container">
        <footer className="footer">
          <div>
            <ul className="footer-list-2">
              <li>
                <a
                  href="https://www.capitalone.com/help-center/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HELP
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/help-center/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PRIVACY
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/digital/identity-protection/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SECURITY
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/digital/terms-conditions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TERMS & CONDITIONS
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/accessibility/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ACCESSIBILITY
                </a>
              </li>
            </ul>
            <ul className="footer-list-2 footer-list-3">
              <li>
                <a
                  href="https://www.capitalone.com/military/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SERVICE MEMBERS CIVIL RELIEF ACT
                </a>
              </li>
              <li>
                <a
                  href="https://ecm.capitalone.com/WCM/navigation/patriot-act-certification-cof-master_ada_2021.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  PATRIOT ACT CERT
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/digital/subpoena-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SUBPOENA POLICY
                </a>
              </li>
              <li>
                <a
                  href="https://www.capitalone.com/digital/disclosures/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ADDITIONAL DISCLOSURES
                </a>
              </li>
            </ul>
            <div className="gov">
              <a href="https://www.fdic.gov/" target="_blank" rel="noreferrer">
                <img
                  src={fdic}
                  alt="federal deposit insurance corporation"
                ></img>
              </a>
              <a
                href="https://www.occ.gov/publications-and-resources/publications/consumer-protection-pubs/files/equal-housing-lender.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={house} alt="equal housing lender"></img>
              </a>
              <a
                href="https://www.jameshlo.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>© 2024 James H Lo</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
