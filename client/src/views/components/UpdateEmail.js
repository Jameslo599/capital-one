import React from "react";

const UpdateEmail = () => {
  return (
    <>
      <div className="update-residential">
        <div>
          <label className="update-greeting__label" for="street">
            Phone Number
          </label>
          <input
            className="update-greeting__input"
            type="email"
            id="email"
            placeholder="email@website.com"
          ></input>
        </div>
        <div>
          <label className="update-greeting__label" for="confirm">
            Re-Enter Your Number
          </label>
          <input
            className="update-greeting__input"
            type="email"
            id="confirm"
            placeholder="email@website.com"
          ></input>
        </div>
        <button className="update-greeting__button">Save</button>
      </div>
    </>
  );
};

export default UpdateEmail;
