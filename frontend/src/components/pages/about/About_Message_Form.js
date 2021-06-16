import React, { useState } from "react";
import { useAssistantContext } from "../../context/context-assistant";
import { useUserContext } from "../../context/context-user";

const AboutMessageForm = () => {
  const { dispatchAssistant } = useAssistantContext();
  const { stateUser, dispatchUser } = useUserContext();

  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    messageText: "",
  });

  const handleMessageForm = (e) => {
    if (!stateUser.email) {
      dispatchAssistant({ type: "REGISTER_FIRST" });
    } else {
      const name = e.target.name;
      const value = e.target.value;
      setMessage({ ...message, [name]: value });
    }
  };
  const addToMessagesList = (e) => {
    e.preventDefault();
    if (stateUser.email) {
      if (message.fullName && message.email && message.messageText) {
        const newMessage = { ...message, _id: new Date().getTime().toString() };
        dispatchUser({ type: "ADD_TO_MESSAGES", payload: newMessage });
        setMessage({ fullName: "", email: "", messageText: "" });
        dispatchAssistant({ type: "NEW_MESSAGE" });
      } else {
        dispatchAssistant({ type: "NO_VALUE" });
      }
    } else {
      dispatchAssistant({ type: "REGISTER_FIRST" });
    }
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="fullName">Name : </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={message.fullName}
          onChange={handleMessageForm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={message.email}
          onChange={handleMessageForm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="messageText">Message : </label>
        <textarea
          style={{ resize: "none" }}
          type="text"
          id="messageText"
          name="messageText"
          value={message.messageText}
          onChange={handleMessageForm}
        ></textarea>
      </div>
      <button
        type="submit"
        name="submit"
        value="SUBMIT"
        className="btn"
        onClick={(e) => addToMessagesList(e)}
      >
        Send your message
      </button>
    </form>
  );
};

export default AboutMessageForm;
