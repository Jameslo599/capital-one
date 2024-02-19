import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import fdic from "../images/fdic.jpg";
import house from "../images/house.jpg";
import forgot from "../images/forgot.png";
import { useState } from "react";
import ISorting from "../images/icons/i-sorting";

function Forgot() {
  const [formData, setFormData] = useState({
    lname: "",
    ssn: "",
    dob: "",
  });

  const onlyNumbers = (e) => {
    if (e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const ele in formData) {
      console.log(`${ele} : ${formData[ele]}`);
    }
  };

  return (
    <div className="login forgot">
      <div>
        <header className="header">
          <nav>
            <div>
              <Link to="/">
                <img className="logo" alt="capital one logo" src={logo}></img>
              </Link>
            </div>
            <Link className="header-support" to={"/"}>
              <ISorting />
              <span>Sign In</span>
            </Link>
          </nav>
        </header>
      </div>
      <div className="section-container">
        <section className="not-found">
          <div className="message-box message">
            <div>
              <img src={forgot} alt="404 traffic cone"></img>
            </div>
            <h1>First, let's find your username</h1>
            <p>
              This information will help us locate your Capital One online
              account(s). If needed, you can update your password after account
              lookup.
            </p>
          </div>
        </section>
        <section className="login find-me">
          <div className="message-box">
            <form onSubmit={handleSubmit}>
              <div className="form-text">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="ssn">Social Security Number</label>
                <input
                  type="password"
                  name="ssn"
                  id="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  onKeyDown={onlyNumbers}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  max="9999-12-31"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="login-button">
                <button type="submit">Find Me</button>
              </div>
            </form>
          </div>
        </section>
      </div>

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

export default Forgot;
