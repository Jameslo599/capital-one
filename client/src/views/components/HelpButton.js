import React, { useState } from "react";
import Comments from "../../images/icons/comments";
import Modal from "./Modal";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

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
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Type your message here"
        />
      </Modal>
    </div>
  );
}

export default HelpButton;
