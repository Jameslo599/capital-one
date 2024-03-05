import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    updateChatbotState(botMessage);
  };

  const handleAccountNumber = () => {
    const botMessage = createChatBotMessage(
      "You can find your account number and routing number here:",
      {
        widget: "accountNumber",
      }
    );
    const botMessage2 = createChatBotMessage(
      "I can also help with other topics, such as:",
      {
        widget: "accountNumber",
      }
    );

    updateChatbotState(botMessage, botMessage2);
  };

  //Update state
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
          actions: { handleHello, handleAccountNumber },
        });
      })}
    </div>
  );
};

export default ActionProvider;
