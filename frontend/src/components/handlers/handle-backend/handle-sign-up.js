const signUp = async (register, dispatchAssistant) => {
  try {
    const res = await fetch(
      "https://mighty-badlands-17333.herokuapp.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(register),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      dispatchAssistant({ type: "ERROR", payload: data.err });
      throw new Error(data.err);
    } else {
      dispatchAssistant({ type: "NEW_REGISTER" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default signUp;
