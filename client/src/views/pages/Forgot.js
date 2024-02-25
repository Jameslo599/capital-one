import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyHeaderView from "../components/MyHeaderView";
import HeaderSupport from "../primatives/HeaderSupport";
import Loading from "../components/Loading";
import forgot from "../../images/forgot.png";
import PreLoginFooter from "../components/PreLoginFooter";

function Forgot() {
  const [formData, setFormData] = useState({
    email: "",
    lname: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
  const notifyInfo = (message) =>
    toast.info(message, {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);
    try {
      const response = await fetch("/api/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const confirmation = await response.json();
      const status = await response.status;
      if (status === 200) {
        return notifyInfo(confirmation);
      }
      if (typeof confirmation !== "string") {
        for (const error of confirmation) {
          notifyError(`${error.msg}`);
        }
        return;
      }
      notifyError(confirmation);
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login forgot">
      <ToastContainer />
      <MyHeaderView
        logoEnd="/"
        headerSupport={<HeaderSupport helpButton={""} signText={"Sign In"} />}
      />
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
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
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
              <div className="login-button">
                {isLoading && <Loading />}
                <button type="submit">Find Me</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <PreLoginFooter />
    </div>
  );
}

export default Forgot;
