import React from "react";

const AccountOptions = (props) => {
  const options = [
    {
      text: "How do I transfer money?",
      handler: () => {
        props.actionProvider.handleHelpList("transferMoney");
      },
      id: 1,
    },
    { text: "What's my account number?", handler: () => {}, id: 2 },
    { text: "What are my recent transactions?", handler: () => {}, id: 3 },
    { text: "Can I see my account summary?", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="react-chatbot-kit-chat-bot-message chat-button"
      key={option.id}
      onClick={option.handler}
      type="button"
    >
      {option.text}
    </button>
  ));

  return <>{optionsMarkup}</>;
};

export default AccountOptions;
