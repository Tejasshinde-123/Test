import React, { useState } from "react";
import "./ChatApp.css";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentUser, setCurrentUser] = useState("Person1");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    const newMessage = {
      user: currentUser,
      text: inputValue.trim(),
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const switchUser = () => {
    setCurrentUser(currentUser === "Person2 " ? "Person1" : "Person2");
  };

  return (
    <div className="chat-app">
        <div className="Name">
        <h3 >Chat App</h3>
        </div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.user === currentUser ? "self" : "other"
              }`}
            >
              <div className="message-user">{message.user}</div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="message-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <button onClick={switchUser} className="switch-user-button">
        Switch Person
      </button>
    </div>
  );
}



export default ChatApp;
