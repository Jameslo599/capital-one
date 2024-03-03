import React, { useState } from "react";
import Comments from "../../images/icons/comments";
import Modal from "../components/Modal";

function HelpButton() {
  const [open, setOpen] = useState();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="help-button">
      <button onClick={() => setOpen(true)}>
        <Comments />
        <span className="supp-text">Need Help?</span>
      </button>
      <Modal open={open} onClose={onClose}>
        Modal
      </Modal>
    </div>
  );
}

export default HelpButton;
