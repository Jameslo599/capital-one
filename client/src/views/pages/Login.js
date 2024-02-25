import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/reset.scss";
import "../../styles/App.scss";
import MyHeaderView from "../components/MyHeaderView";
import PreLoginFooter from "../components/PreLoginFooter";
import logo from "../../images/logo.svg";
import Loading from "../components/Loading";

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
      <MyHeaderView logoEnd={0} />
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
      <PreLoginFooter />
    </div>
  );
}

export default Login;
