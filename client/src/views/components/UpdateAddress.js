import React from "react";
import State from "../../images/icons/select-state";

const UpdateAddress = () => {
  return (
    <>
      <div className="update-residential">
        <div>
          <label className="update-residential__label" for="street">
            Street Address
          </label>
          <input
            className="update-residential__input"
            type="text"
            id="street"
            placeholder="Street Address"
          ></input>
        </div>
        <div>
          <label className="update-residential__label" for="apartment">
            Apartment or Suite (optional)
          </label>
          <input
            className="update-residential__input"
            type="text"
            id="apartment"
            placeholder="Apartment or Suite #"
          ></input>
        </div>
        <div>
          <label className="update-residential__label" for="city">
            City
          </label>
          <input
            className="update-residential__input"
            type="text"
            id="city"
            placeholder="City"
          ></input>
        </div>
        <div className="update-residential__state-container">
          <div>
            <label className="update-residential__label" for="state">
              State
            </label>
            <State />
          </div>
          <div>
            <label className="update-residential__label" for="zip">
              ZIP Code
            </label>
            <input
              className="update-residential__input"
              type="text"
              id="zip"
              placeholder="ZIP Code"
            ></input>
          </div>
        </div>
        <div className="update-residential__button">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default UpdateAddress;
