import React, { useState } from "react";
import "../styles/chat.css";
function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const messages = [
    {
      sender: "admin",
      message:
        "Hello!👋 interested in new bouquets? I can answer any of your question",
    },
    {
      sender: "user",
      message: "Hello, do you have tulips available?",
    },
    {
      sender: "admin",
      message:
        "There was a fresh delivery yesterday, hoe many are you interested in?",
    },
  ];
  return (
    <div className="chat__main">
      <img
        onClick={() => setIsOpen(!isOpen)}
        src="/imgs/chat_logo.png"
        alt=""
      />
      <div className="chat__box" style={{ display: isOpen ? "flex" : "none" }}>
        <div className="chat__header">
          <div className="header__text">
            <h2>Online Chat</h2>
            <p>
              <img src="/imgs/chat_clock.svg" alt="" />
              We are here from 19:23 to 23:00
            </p>
          </div>
          <div className="header__chat__logo">
            <img src="/imgs/chat_phone.svg" alt="" />
          </div>
        </div>
        <div className="chat__messages">
          {messages.map((message) => (
            <div className="message_card">
              <div
                className="message_container"
                style={{
                  justifyContent:
                    message.sender === "admin" ? "flex-start" : "flex-end",
                }}
              >
                <div className="message">
                  {message.sender === "admin" && (
                    <img
                      src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg"
                      alt=""
                    />
                  )}
                  <p
                    style={{
                      backgroundColor:
                        message.sender === "admin" ? "white" : "#47A4FB",
                      color: message.sender === "admin" ? "black" : "white",
                    }}
                  >
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="credits">
            <span>Powered⚡️ by</span>
            <img
              src="https://umnico.com/assets/image/umnico1-c80f21186b3e61f17609aa4892eb6908.svg"
              alt=""
            />
          </div>
        </div>
        <div className="send__message">
          <input type="text" placeholder="Your message" />
          <img src="/imgs/file.svg" alt="" />
          <img src="/imgs/emojis.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

{
  /*  */
}
