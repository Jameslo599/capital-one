import React from "react";

const UpdatePhone = () => {
  return (
    <>
      <div className="update-residential">
        <div>
          <label className="update-greeting__label" for="street">
            Phone Number
          </label>
          <input
            className="update-greeting__input"
            type="tel"
            id="phone"
            placeholder="(XXX) XXX-XXXX"
          ></input>
        </div>
        <div>
          <label className="update-greeting__label" for="confirm">
            Re-Enter Your Number
          </label>
          <input
            className="update-greeting__input"
            type="tel"
            id="confirm"
            placeholder="(XXX) XXX-XXXX"
          ></input>
        </div>
        <button className="update-greeting__button">Save</button>
      </div>
    </>
  );
};

export default UpdatePhone;
