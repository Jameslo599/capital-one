import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../components/HeaderSupport";
import HelpButton from "../components/HelpButton";
import useSignOut from "../../hooks/useSignOut";
import Magnifier from "../../images/icons/magnifier";
import Filter from "../../images/icons/filter";
import CInfo from "../../images/icons/c-info";
import CAdd from "../../images/icons/c-add";
import CalendarDate2 from "../../images/icons/calendar-date-2";
import BankStatement from "../../images/icons/bank-statement";
import RightArrow from "../../images/icons/right-arrow";

function Bank() {
  const [backendData, setBackendData] = useState(null);
  const [isMobile, setIsMobile] = useState();
  const [error, setError] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const { handleClick } = useSignOut();

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const personalize = async () => {
      try {
        const response = await fetch(`/api/user/${params.username}`);
        const data = await response.json();

        if (!data) return navigate("/");
        if (data.userName !== params.username)
          return navigate(`/home/${data.userName}`);
        setBackendData(data);
      } catch (e) {
        setError(e);
      }
    };

    personalize();
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [navigate, params.username]);

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
            logoEnd={0}
          />
          <div className="bank-hero">
            <div className="bank-info-container">
              <div className="bank-title">
                <h1>360 Checking</h1>
                <span>
                  360 CHECKING<span>...9473</span>
                </span>
                <div>
                  <CInfo width={"12px"} />
                  <span>VIEW DETAILS</span>
                  <RightArrow />
                </div>
              </div>
              <div className="hero-balance">
                <span>AVAILABLE BALANCE</span>
                <div>
                  <span>$</span>
                  {backendData.balance}
                  <span>00</span>
                </div>
              </div>
              <div>
                <button>Transfer Money</button>
              </div>
            </div>
          </div>
          <div className="bank-container">
            <div className="service-strip">
              <div>
                <BankStatement />
                <span>Zelle®</span>
              </div>
              <div>
                <CalendarDate2 />
                <span>Pay Bills</span>
              </div>
              <div>
                <BankStatement />
                <span>Statements</span>
              </div>
              <div>
                <CAdd />
                {isMobile ? (
                  <span>More</span>
                ) : (
                  <span>Account Services & Settings</span>
                )}
              </div>
            </div>
            <section className="upcoming-transactions">
              <div className="past-header">
                <h2>Upcoming Transactions</h2>
                <div className="c-info-container">
                  <CInfo />
                  <p className="c-info-popup">
                    These are transactions that are set to happen in the next 30
                    days. Since they have not happened yet, they do not affect
                    your available balance. If you have transactions scheduled
                    for more than 30 days in the future and would like to edit
                    or delete them, please call us at 1-888-464-0727 any day
                    from 8AM - 8PM.
                  </p>
                </div>
              </div>
              <div className="upcoming-history">
                <p>
                  You don't have any upcoming transactions. If you schedule a
                  payment or transfer in the future, you will see it here.
                </p>
              </div>
            </section>

            <section className="past-transactions">
              <div className="past-header">
                <h2>Past Transactions</h2>
                <div className="c-info-container">
                  <CInfo />
                  <p className="c-info-popup">
                    This includes transactions that have affected your balance.
                  </p>
                </div>
              </div>
              <div>
                <div className="transaction-search">
                  <div>
                    <Magnifier />
                    <input
                      type="text"
                      placeholder="Search amount, date, or transaction description"
                    ></input>
                  </div>
                  <button>
                    <Filter />
                    Filter
                  </button>
                </div>
                <div className="transaction-history">
                  <div>NO TRANSACTIONS</div>
                </div>
              </div>
              <div className="transactions-disclaimer">
                <p>
                  To help you identify your purchases, we may provide additional
                  information about your transactions, including the company
                  name, address, phone number, marks, and logos. This additional
                  information might not be accurate and does not imply any
                  affiliation between Capital One and the company. Always refer
                  to the original transaction descriptions that appear on your
                  statement.
                </p>
              </div>
            </section>
          </div>

          <MyFooterView />
        </div>
      )}
    </div>
  );
}

export default Bank;
