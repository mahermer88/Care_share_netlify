import React, { useState } from "react";
import { useAssistantContext } from "../../context/context-assistant";
import { useUserContext } from "../../context/context-user";
import userSubmitForm from "../../handlers/handle-frontend/sign-in-form";
import registerSubmitForm from "../../handlers/handle-frontend/sign-up-form";

import "./sign-container.css";
const SignFormContainer = () => {
  const { dispatchAssistant } = useAssistantContext();
  const { dispatchUser } = useUserContext();

  // sign-in-form
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //register-form
  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSignInForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleRegisterForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  return (
    <>
      <div className="register">
        <h2>CareShare</h2>
        <p>
          Sign up to benefit from exclusive store benefits. You will also
          receive exclusive discounts all year round. Create your account
          quickly and join us!
        </p>
        <form className="register-form">
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleRegisterForm}
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={register.username}
              onChange={handleRegisterForm}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Password: </label>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleRegisterForm}
            />
          </div>
          <button
            type="submit"
            className="btn"
            onClick={(e) =>
              registerSubmitForm(
                e,
                register,
                setRegister,
                dispatchAssistant,
                dispatchUser
              )
            }
          >
            Register
          </button>
        </form>
      </div>
      <div className="sign-in">
        <form>
          <p>If you already registered:</p>
          <div className="form-control">
            <label htmlFor="username">Email: </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleSignInForm}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Password: </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleSignInForm}
            />
          </div>
          <button
            type="submit"
            className="btn"
            onClick={(e) =>
              userSubmitForm(e, user, setUser, dispatchAssistant, dispatchUser)
            }
          >
            Sign in
          </button>
          <a href="/">Forget your password</a>
        </form>
      </div>
    </>
  );
};

export default SignFormContainer;
