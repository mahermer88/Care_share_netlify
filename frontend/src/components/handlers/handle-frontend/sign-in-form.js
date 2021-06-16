import signIn from "../handle-backend/handle-sign-in";

const userSubmitForm = async (
  e,
  user,
  setUser,
  dispatchAssistant,
  dispatchUser
) => {
  e.preventDefault();
  if (user.email && user.password) {
    const activeUser = await signIn(user, dispatchAssistant);
    if (activeUser) {
      dispatchUser({ type: "GET_USER", payload: activeUser });
      setUser({ email: "", password: "" });
    }
  } else {
    dispatchAssistant({ type: "NO_VALUE" });
  }
};

export default userSubmitForm;
