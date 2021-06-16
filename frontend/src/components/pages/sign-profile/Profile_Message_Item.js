import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useUserContext } from "../../context/context-user";

const ProfileMessageItem = ({ message }) => {
  const { removeFromMessagesList, dispatchUser } = useUserContext();

  return (
    <div className="message">
      <h3>{message.fullName}</h3>
      <h4>{message.email}</h4>
      <p>{message.messageText}</p>
      <AiOutlineDelete
        className="icon"
        style={{ color: "red" }}
        onClick={() => removeFromMessagesList(message, dispatchUser)}
      />
    </div>
  );
};

export default ProfileMessageItem;
