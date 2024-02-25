import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import fdic from "../images/fdic.jpg";
import house from "../images/house.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
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
    toast.success("Success! Logging in...", {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBox = () => {
    const value = formData.remember === false ? true : false;
    setFormData((prevState) => ({
      ...prevState,
      remember: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);
    console.log(formData);
    try {
      const response = await fetch("/api/login", {
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
        navigate(`/home/${formData.userName.toLowerCase()}`);
      }
      notifyError(confirmation.msg);
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <ToastContainer />
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
          <form onSubmit={handleSubmit}>
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
            <div className="remember-me">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                onChange={handleBox}
              ></input>
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className="login-button">
              {isLoading && <Loading />}
              <button type="submit">Sign In</button>
            </div>
          </form>
          <div className="forgot">
            <Link to={"/forgot"}>Forgot Username or Password?</Link>
            <Link to={"/signup"}>Sign Up Here</Link>
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
