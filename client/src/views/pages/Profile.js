import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../components/HeaderSupport";
import HelpButton from "../components/HelpButton";
import useSignOut from "../../hooks/useSignOut";
import Pen from "../../images/icons/pen";
import StarRate from "../../images/icons/star-rate";
import UpdateModal from "../components/UpdateModal";
import UpdateGreeting from "../components/UpdateGreeting";
import UpdateAddress from "../components/UpdateAddress";
import UpdatePhone from "../components/UpdatePhone";
import UpdateEmail from "../components/UpdateEmail";
import avatar from "../../images/avatar.svg";
import UpdateMailing from "../components/UpdateMailing";

function Profile() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { handleClick } = useSignOut();

  const [open, setOpen] = useState(null);
  const [title, setTitle] = useState(null);
  const [children, setChildren] = useState(null);
  const onClose = () => {
    setOpen(false);
  };

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const handleImageUpload = async (e) => {
    try {
      if (e.target.files[0].size > 1048576) {
        alert("File must be under 1MB");
        return (e.target.value = "");
      }
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const response = await fetch("/api/avatar", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const { current } = uploadedImage;
      current.src = data;
    } catch (error) {
      console.log(error);
    }
  };

  const personalize = useCallback(async () => {
    try {
      const response = await fetch(`/api/user`);
      const data = await response.json();
      if (!data) return navigate("/");
      setBackendData(data);
      setOpen(false);
    } catch (e) {
      setError(e);
    }
  }, [navigate]);
  useEffect(() => {
    personalize();
  }, [navigate, personalize]);

  return (
    <div>
      {!backendData ? (
        <div className="loading full-screen">
          <div>
            <div className="spinner-container">
              <CircleAnim2 />
            </div>
            <h1>Please Wait...</h1>
            {error && (
              <span>An error has occurred! Please refresh and try again.</span>
            )}
          </div>
        </div>
      ) : (
        <div className="App">
          <MyHeaderView
            headerSupport={
              <HeaderSupport
                helpButton={<HelpButton />}
                signText={""}
                link={""}
                signOut={handleClick}
              />
            }
            logoEnd={"/"}
            backArrow={true}
          />
          <section className="profile">
            <div className="profile-banner">
              <h1>Profile</h1>
            </div>
            <div className="profile-greeting">
              <div className="profile-image">
                <img
                  src={backendData ? backendData.cloudinary_id : avatar}
                  ref={uploadedImage}
                  alt="profile"
                ></img>
                <div onClick={() => imageUploader.current.click()}>
                  <span>ADD PHOTO</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple="false"
                  ref={imageUploader}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="profile-greeting-edit">
                <span>
                  {backendData ? backendData.greeting : "Greeting Name"}
                </span>
                <button
                  onClick={() => {
                    setOpen(true);
                    setTitle("Edit Greeting Message");
                    setChildren(<UpdateGreeting personalize={personalize} />);
                  }}
                >
                  <Pen />
                </button>
                <UpdateModal
                  open={open}
                  onClose={onClose}
                  children={children}
                  title={title}
                ></UpdateModal>
              </div>
            </div>
            <div className="profile-address">
              <h2>Addresses</h2>
              <div>
                <div className="profile-address-edit">
                  <div className="profile-category">
                    <div>
                      <span>Residential Address</span>
                    </div>
                    <span>
                      {backendData.street_address}
                      <br />
                      {backendData.apartment_suite ? (
                        <>
                          {backendData.apartment_suite}
                          <br />
                        </>
                      ) : null}
                      {backendData.city}, {backendData.state}, {backendData.zip}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Residential Address");
                      setChildren(<UpdateAddress personalize={personalize} />);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
                <div className="profile-address-edit">
                  <div className="profile-category">
                    <div>
                      <span>Mailing Address</span>
                      <StarRate />
                    </div>
                    <span>
                      {backendData.mail_address
                        ? backendData.mail_address
                        : backendData.street_address}
                      <br />
                      {backendData.mail_apartment ? (
                        <>
                          {backendData.mail_apartment}
                          <br />
                        </>
                      ) : backendData.apartment_suite ? (
                        <>
                          {backendData.apartment_suite}
                          <br />
                        </>
                      ) : null}
                      {backendData.mail_city
                        ? backendData.mail_city
                        : backendData.city}
                      ,{" "}
                      {backendData.mail_state
                        ? backendData.mail_state
                        : backendData.state}
                      ,{" "}
                      {backendData.mail_zip
                        ? backendData.mail_zip
                        : backendData.zip}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Mailing Address");
                      setChildren(<UpdateMailing personalize={personalize} />);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
              </div>
            </div>

            <div className="profile-phone">
              <h2>Phone</h2>
              <div>
                <div className="profile-phone-edit">
                  <div className="profile-category">
                    <div>
                      <span>Mobile</span>
                    </div>
                    <div>
                      <span className="phone-num">(214) 901-0531 </span>
                      <StarRate />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Mobile Number");
                      setChildren(UpdatePhone);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
                <div className="profile-phone-edit">
                  <div className="profile-category">
                    <div>
                      <span>Home</span>
                    </div>
                    <span className="undefined">(XXX) XXX-XXXX </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Add Home Number");
                      setChildren(UpdatePhone);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
                <div className="profile-phone-edit">
                  <div className="profile-category">
                    <div>
                      <span>Work</span>
                    </div>
                    <span className="undefined">(XXX) XXX-XXXX </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Add Work Number");
                      setChildren(UpdatePhone);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
              </div>
            </div>

            <div className="profile-email">
              <h2>Personal Email</h2>
              <div>
                <div className="profile-email-edit">
                  <div>
                    <span>{backendData.email}</span>

                    <StarRate />
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Email Address");
                      setChildren(<UpdateEmail personalize={personalize} />);
                    }}
                  >
                    <Pen />
                  </button>
                  <UpdateModal
                    open={open}
                    onClose={onClose}
                    children={children}
                    title={title}
                  ></UpdateModal>
                </div>
              </div>
            </div>
          </section>
          <MyFooterView />
        </div>
      )}
    </div>
  );
}

export default Profile;
