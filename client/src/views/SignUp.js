import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import fdic from "../images/fdic.jpg";
import house from "../images/house.jpg";
import { useState } from "react";
import ISorting from "../images/icons/i-sorting";
import Loading from "./Loading";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    fname: "",
    lname: "",
    dob: "",
    balance: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const notifySuccess = () =>
    toast.success("Success", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const dismissAll = () => toast.dismiss();

  const onlyNumbers = (e) => {
    if (e.which < 48 || e.which > 57) {
      if (e.key === "Backspace" || e.key === "Delete") return;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const confirmation = await response.json();
      const status = await response.status;
      if (status === 200) {
        notifySuccess();
        return navigate(`/home/${confirmation}`);
      }
      if (typeof confirmation === "string") notifyError(confirmation);
      if (typeof confirmation !== "string") {
        for (const error of confirmation) {
          notifyError(`${error.msg}`);
        }
      }
    } catch (e) {
      setError(e);
      notifyError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login forgot create">
      <ToastContainer />
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
        <section className="login find-me">
          <div className="message-box">
            <div>
              <img src={logo} alt="capital one logo"></img>
            </div>
            <h1>Open a 360 Checking Account</h1>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-text">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-text">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
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
              <div className="form-text">
                <label htmlFor="balance">Initial Deposit</label>
                <input
                  type="text"
                  name="balance"
                  id="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  onKeyDown={onlyNumbers}
                  placeholder="USD"
                  required
                ></input>
              </div>
              <div className="login-button">
                {isLoading && <Loading />}
                <button type="submit">Open Account</button>
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

export default SignUp;
