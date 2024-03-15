import React from "react";

const UpdateAddress = () => {
  return (
    <>
      <div className="update-residential">
        <div>
          <label className="update-greeting__label" for="street">
            Street Address
          </label>
          <input
            className="update-greeting__input"
            type="text"
            id="street"
            placeholder="Street Address"
          ></input>
        </div>
        <div>
          <label className="update-greeting__label" for="apartment">
            Apartment or Suite (optional)
          </label>
          <input
            className="update-greeting__input"
            type="text"
            id="apartment"
            placeholder="Apartment or Suite #"
          ></input>
        </div>
        <div>
          <label className="update-greeting__label" for="city">
            City
          </label>
          <input
            className="update-greeting__input"
            type="text"
            id="city"
            placeholder="City"
          ></input>
        </div>
        <div>
          <label className="update-greeting__label" for="state">
            State
          </label>
          <input className="update-greeting__input" id="state"></input>
        </div>
        <div>
          <label className="update-greeting__label" for="zip">
            ZIP Code
          </label>
          <input
            className="update-greeting__input"
            type="text"
            id="zip"
            placeholder="ZIP Code"
          ></input>
        </div>

        <button className="update-greeting__button">Save</button>
      </div>
    </>
  );
};

export default UpdateAddress;
