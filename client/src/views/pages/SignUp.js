import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import HeaderSupport from "../primatives/HeaderSupport";
import Loading from "../components/Loading";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";

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
    formData.userName = formData.userName.split(" ").join("");
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
