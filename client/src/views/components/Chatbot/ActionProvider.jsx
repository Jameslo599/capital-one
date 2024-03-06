import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    updateChatbotState(botMessage);
  };

  const handleHelpList = (topic) => {
    switch (topic) {
      case "transferMoney":
        topic = createClientMessage("How do I transfer money?");
        break;
      default:
        topic = createClientMessage("Error, no topic selected!");
    }

    const botMessage = createChatBotMessage(
      "You can transfer money or set up a recurring transfer here:",
      { widget: "transferLink" }
    );
    const botMessage2 = createChatBotMessage(
      "I can also help with other topics, such as:",
      { widget: "helpLinks" }
    );

    updateChatbotState(topic, botMessage, botMessage2);
  };

  //Add messages
  const updateChatbotState = (...message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message].flat(),
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleHelpList },
        });
      })}
    </div>
  );
};

export default ActionProvider;
