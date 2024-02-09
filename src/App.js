import "./App.scss";
import logo from "./images/logo.svg";
import credit from "./images/credit-score.png";
import khan from "./images/money-swirl.avif";
import macy from "./images/macys_legacy.webp";
import fdic from "./images/fdic.jpg";
import house from "./images/house.jpg";
import priceline from "./images/priceline.webp";
import adidas from "./images/adidas.webp";
import ISorting from "./images/icons/i-sorting";
import Comments from "./images/icons/comments";
import ShowToHide from "./images/icons/show-to-hide";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyBanner />
      <section className="tile-layout">
        <div className="widgets-1">
          <AccountTile />
          <ExploreTile />
          <TransactTile />
        </div>
        <div className="widgets-2">
          <CreditTile />
          <KhanTile />
          <ShoppingTile />
          <MapTile />
        </div>
      </section>
      <MyFooter />
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
            <div>
              <span>$</span>0<span className="decimal">.</span>
              <span>00</span>
            </div>
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

function ExploreTile() {
  return (
    <div className="explore-tile">
      <div>
        <span>Explore other products</span>
        <p>
          Explore all our products now to find an account that's right for you.
        </p>
      </div>
      <button className="explore-button">Open a new account</button>
    </div>
  );
}

function TransactTile() {
  return (
    <div className="transact-tile">
      <div>
        <span>Recent Transactions</span>
        <button className="transact-button">View More</button>
      </div>
      <div>
        <p>You have no recent transactions.</p>
      </div>
    </div>
  );
}

function CreditTile() {
  return (
    <div className="credit-tile">
      <div>
        <h4>CreditWise</h4>
        <div className="credit-main">
          <img src={credit} alt="credit score"></img>

          <div>
            <p>See Your Score in Seconds</p>
            <span>Activate Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function KhanTile() {
  return (
    <div className="khan-tile">
      <div>
        <h4>Finances 101</h4>
        <div className="khan-main">
          <div>
            <img src={khan} alt="money swirl"></img>
          </div>
          <div>
            <p>
              We've partnered with Khan Academy to offer a free, self-paced
              financial literacy course.
            </p>
          </div>
        </div>
      </div>
      <div className="khan-buttons">
        <button>Not now</button>
        <button>Get tips</button>
      </div>
    </div>
  );
}

function ShoppingTile() {
  return (
    <div className="shop-tile">
      <div>
        <h4>Credits for Shopping</h4>
        <div className="shop-main">
          <div>
            <div>
              <img src={macy} alt="macy's"></img>
            </div>
            <span>Up to 4% back</span>
            <span>Get Savings</span>
          </div>
          <div>
            <div>
              <img src={priceline} alt="priceline"></img>
            </div>
            <span>Up to 6% back</span>
            <span>Get Savings</span>
          </div>
          <div>
            <div>
              <img src={adidas} alt="adidas"></img>
            </div>
            <span>8% back</span>
            <span>Get Savings</span>
          </div>
        </div>
      </div>
      <div className="shop-button">
        <button>View All Offers</button>
      </div>
    </div>
  );
}

function MapTile() {
  return (
    <div className="map-tile">
      <div>
        <h4>Branch / ATM Finder</h4>
        <div className="map-main">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Lf3DSb4o1Q_NUzDFd1HLQRgi2gjOJWw&ehbc=2E312F"
            height="480"
            title="capital one"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function MyFooter() {
  return (
    <div>
      <footer className="footer">
        <div>
          <ul className="footer-list-1">
            <li>
              <a
                href="https://www.capitalone.com"
                target="_blank"
                rel="noreferrer"
              >
                PRODUCTS
              </a>
            </li>
            <li className="sublist">
              <ShowToHide text="ABOUT US" />
              <ul>
                <li>
                  <a
                    href="https://www.capitalone.com/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About Capital One
                  </a>
                </li>
                <li>
                  <a
                    href="https://investor.capitalone.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/about/newsroom/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/about/our-commitments/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investing For Good
                  </a>
                </li>
              </ul>
            </li>
            <li>CAREERS</li>
            <li className="sublist">
              <ShowToHide text="LEGAL" />
              <ul>
                <li>
                  <a
                    href="https://www.capitalone.com/military/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Servicemembers Civil Relief Act
                  </a>
                </li>
                <li>
                  <a
                    href="https://ecm.capitalone.com/WCM/navigation/patriot-act-certification-cof-master_ada_2021.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Patriot Act Cert
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/digital/subpoena-policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Subpoena Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/digital/disclosures/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Additional Disclosures
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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
            <li>
              <button>FEEDBACK</button>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/facts2019/"
                target="_blank"
                rel="noreferrer"
              >
                2019 CYBER INCIDENT
              </a>
            </li>
          </ul>
          <p>
            Products and services are offered by Capital One, N.A., Member FDIC.
            Deposit products are insured to{" "}
            <a
              href="https://www.capitalone.com/bank/money-management/banking-basics/fdic-insurance-limits/"
              target="_blank"
              rel="noreferrer"
            >
              current FDIC limits.
            </a>
          </p>
          <div className="gov">
            <a href="https://www.fdic.gov/" target="_blank" rel="noreferrer">
              <img src={fdic} alt="federal deposit insurance corporation"></img>
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
  );
}

export default App;
