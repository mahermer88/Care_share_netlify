import upDate from "./handle-update";

const addTOMessagesList = async (
  e,
  message,
  setMessage,
  dispatch,
  activeUser,
  setActiveUser
) => {
  e.preventDefault();
  if (message.fullName && message.email && message.messageText) {
    const newMessage = { ...message, id: new Date().getTime().toString() };
    dispatch({ type: "NEW_MESSAGE" });
    const newUser = {
      ...activeUser,
      messages: [...activeUser.messages, newMessage],
    };
    const upDateUser = await upDate(activeUser, newUser);
    setActiveUser(upDateUser);
    setMessage({ fullName: "", email: "", messageText: "" });
  } else {
    dispatch({ type: "NO_VALUE" });
  }
};

const removeFromMessagesList = async (activeUser, setActiveUser, message) => {
  const newUser = {
    ...activeUser,
    messages: activeUser.messages.filter(
      (messageItem) => messageItem.id !== message.id
    ),
  };

  setActiveUser(newUser);
  const upDateUser = await upDate(activeUser, newUser);
  setActiveUser(upDateUser);
};

export { addTOMessagesList, removeFromMessagesList };
