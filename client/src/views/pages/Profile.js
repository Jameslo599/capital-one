import React, { useEffect, useRef, useState } from "react";
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
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const personalize = async () => {
      try {
        const response = await fetch(`/api/user`);
        const data = await response.json();

        if (!data) return navigate("/");
        setBackendData(data);
      } catch (e) {
        setError(e);
      }
    };

    personalize();
  }, [navigate]);

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
                <img src={avatar} ref={uploadedImage} alt="profile"></img>
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
                <span>Greeting Name</span>
                <button
                  onClick={() => {
                    setOpen(true);
                    setTitle("Edit Greeting Message");
                    setChildren(UpdateGreeting);
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
                      1234 April Meadow Way
                      <br />
                      Sugar Land, TX, 77879
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Residential Address");
                      setChildren(UpdateAddress);
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
                      <span>Primary Mailing Address</span>
                      <StarRate />
                    </div>
                    <span>
                      1234 April Meadow Way
                      <br />
                      Sugar Land, TX, 77879
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Mailing Address");
                      setChildren(UpdateAddress);
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
                    <span>Email</span>

                    <StarRate />
                  </div>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setTitle("Edit Email Address");
                      setChildren(UpdateEmail);
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
