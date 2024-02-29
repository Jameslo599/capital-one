import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyHeaderView from "../components/MyHeaderView";
import Loading from "../components/Loading";
import forgot from "../../images/lock.svg";
import PreLoginFooter from "../components/PreLoginFooter";
import useFormData from "../../hooks/useFormState";
import usePasswordReset from "../../hooks/usePasswordReset";

function ResetPassword() {
  const params = useParams();
  const { formData, handleChange } = useFormData({
    password: "",
    confirm: "",
  });
  const { isLoading, handleSubmit } = usePasswordReset(
    formData,
    `/api/reset/${params.username}`
  );
  return (
    <div className="login forgot">
      <ToastContainer />
      <MyHeaderView logoEnd="/" />
      <div className="section-container">
        <section className="not-found">
          <div className="message-box message">
            <div>
              <img src={forgot} alt="404 traffic cone"></img>
            </div>
            <h1>Reset your password</h1>
            <p>
              This page will only be available for a short period of time.{" "}
              <br />
              Please update your password as soon as possible.
            </p>
          </div>
        </section>
        <section className="login find-me">
          <div className="message-box">
            <form onSubmit={handleSubmit}>
              <div className="form-text">
                <label htmlFor="password">New Password</label>
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
                <label htmlFor="confirm">Confirm Password</label>
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  value={formData.confirm}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="login-button">
                {isLoading && <Loading />}
                <button type="submit">Change Password</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <PreLoginFooter />
    </div>
  );
}

export default ResetPassword;
