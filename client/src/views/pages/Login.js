import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/reset.scss";
import "../../styles/App.scss";
import MyHeaderView from "../components/MyHeaderView";
import PreLoginFooter from "../components/PreLoginFooter";
import logo from "../../images/logo.svg";
import Loading from "../components/Loading";
import useFormData from "../../hooks/useFormState";
import useLogin from "../../hooks/useLogin";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const logged = async () => {
      try {
        const response = await fetch("/api/getlogged?");
        const data = await response.json();
        console.log(data);
        return data === false ? null : navigate(`/home/${data}`);
      } catch (error) {
        console.log(error);
      }
    };
    logged();
  }, [navigate]);

  const { formData, handleChange, handleBox } = useFormData({
    userName: "",
    password: "",
    remember: false,
  });
  const { isLoading, handleSubmit } = useLogin(formData, "/api/login");

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
