import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { format } from "date-fns";
import AccountNumber from "./AccountNumber";

const botName = "Eno";
const date = format(new Date(), "MMM d, y 'at' p");

const config = {
  initialMessages: [
    createChatBotMessage(`Hi there!`),
    createChatBotMessage(
      `I'm ${botName}, your Capital One assistant. I'm not a human, so I'm available 24/7. Ask me a question, or try one of these:`,
      { withAvatar: true, widget: "accountNumber" }
    ),
  ],
  botName: botName,
  customComponents: {
    header: () => <div className="react-chatbot-kit-chat-header">{date}</div>,
  },
  widgets: [
    {
      widgetName: "accountNumber",
      widgetFunc: (props) => <AccountNumber {...props} />,
    },
  ],
};

export default config;
