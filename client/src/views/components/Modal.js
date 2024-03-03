import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  return createPortal(
    <>
      <div className={`modal-overlay ${open ? "modal-overlay-on" : ""}`}></div>
      <div className={`modal ${open ? "modal-active" : ""}`}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
