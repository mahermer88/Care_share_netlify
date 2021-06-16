import signUp from "../handle-backend/handle-sign-up";

const registerSubmitForm = async (
  e,
  register,
  setRegister,
  dispatchAssistant,
  dispatchUser
) => {
  e.preventDefault();
  if (register.email && register.username && register.password) {
    const activeUser = await signUp(register, dispatchAssistant);
    if (activeUser) {
      dispatchUser({ type: "GET_USER", payload: activeUser });
      setRegister({ name: "", email: "", username: "", password: "" });
    }
  } else {
    dispatchAssistant({ type: "NO_VALUE" });
  }
};

export default registerSubmitForm;
