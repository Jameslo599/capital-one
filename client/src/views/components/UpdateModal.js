import React from "react";
import { createPortal } from "react-dom";
import ERemove from "../../images/icons/e-remove";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateModal({ open, children, onClose, title, icon }) {
  return createPortal(
    <>
      <ToastContainer />
      <div
        className={`update-modal-overlay ${
          open ? "update-modal-overlay-on" : ""
        }`}
        onClick={onClose}
      ></div>
      <div className={`update-modal ${open ? "update-modal-active" : ""}`}>
        <button onClick={onClose}>
          <ERemove />
        </button>
        {icon}
        <div className="update-modal__container">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
