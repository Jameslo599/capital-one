import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../components/HeaderSupport";
import HelpButton from "../components/HelpButton";
import useSignOut from "../../hooks/useSignOut";
import Pen from "../../images/icons/pen";
import StarRate from "../../images/icons/star-rate";

function Profile() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { handleClick } = useSignOut();

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
              <div className="profile-image">image here</div>
              <div className="profile-greeting-edit">
                <span>Greeting Name</span>
                <button>
                  <Pen />
                </button>
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
                  <button>
                    <Pen />
                  </button>
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
                  <button>
                    <Pen />
                  </button>
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
                  <button>
                    <Pen />
                  </button>
                </div>
                <div className="profile-phone-edit">
                  <div className="profile-category">
                    <div>
                      <span>Home</span>
                    </div>
                    <span className="undefined">(XXX) XXX-XXXX </span>
                  </div>
                  <button>
                    <Pen />
                  </button>
                </div>
                <div className="profile-phone-edit">
                  <div className="profile-category">
                    <div>
                      <span>Work</span>
                    </div>
                    <span className="undefined">(XXX) XXX-XXXX </span>
                  </div>
                  <button>
                    <Pen />
                  </button>
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
                  <button>
                    <Pen />
                  </button>
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
