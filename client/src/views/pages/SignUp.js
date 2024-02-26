import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import HeaderSupport from "../primatives/HeaderSupport";
import Loading from "../components/Loading";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import useFormData from "../../hooks/useFormState";
import useSignUp from "../../hooks/useSignUp";

function SignUp() {
  const { formData, handleChange, onlyNumbers } = useFormData({
    userName: "",
    password: "",
    email: "",
    fname: "",
    lname: "",
    dob: "",
    balance: "",
  });
  const { isLoading, handleSubmit } = useSignUp(formData, "/api/create");

  return (
    <div className="login forgot create">
      <ToastContainer />
      <MyHeaderView
        logoEnd={"/"}
        headerSupport={<HeaderSupport helpButton={""} signText={"Sign In"} />}
      />
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
      <MyFooterView />
    </div>
  );
}

export default SignUp;
