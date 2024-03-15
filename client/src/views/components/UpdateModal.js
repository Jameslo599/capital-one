import React from "react";
import { createPortal } from "react-dom";
import ERemove from "../../images/icons/e-remove";

export default function UpdateModal({ open, children, onClose, title, icon }) {
  return createPortal(
    <>
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
        <h1>{title}</h1>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
