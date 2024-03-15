import React from "react";

const UpdateGreeting = () => {
  return (
    <>
      <div className="update-greeting">
        <div className="update-greeting-container">
          <label className="update-greeting__label-container_label">
            Greeting
          </label>
          <span>0 / 20</span>
        </div>
        <input className="update-greeting__input"></input>
        <button className="update-greeting__button">Save</button>
      </div>
    </>
  );
};

export default UpdateGreeting;
