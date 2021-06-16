import React, { useState } from "react";
import { BiSupport, BiRefresh } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { useAssistantContext } from "../../context/context-assistant";
import registerSubmitForm from "../../handlers/handle-frontend/sign-up-form";

const HomePromo = () => {
  const { dispatchAssistant } = useAssistantContext();

  //register-form
  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleRegisterForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  return (
    <div className="home-promo">
      <div className="home-services">
        <div className="blank">
          <h1>Care Share</h1>
          <div className="services">
            <div className="service">
              <i>
                <FaShippingFast fill="var(--clr-yellow-2)" />
              </i>
              <h3>Free Shipping</h3>
              <p>Free Shipping for all our orders</p>
            </div>
            <div className="service">
              <i>
                <BiSupport fill="var(--clr-yellow-2)" />
              </i>
              <h3>Support 24/7</h3>
              <p>Our team is there 24h a day</p>
            </div>
            <div className="service">
              <i>
                <BiRefresh fill="var(--clr-yellow-2)" />
              </i>
              <h3>100% Money Back</h3>
              <p>You have 30 days to return</p>
            </div>
          </div>
        </div>
        <div className="home-register">
          <h2>Register Now</h2>
          <p>
            get 30% off With <span>Promo Code</span>
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
                type="text"
                name="password"
                value={register.password}
                onChange={handleRegisterForm}
              />
            </div>
            <button
              type="submit"
              className="btn"
              onClick={(e) =>
                registerSubmitForm(e, register, setRegister, dispatchAssistant)
              }
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="search for: meter, brace,..... " />
      </div>
    </div>
  );
};

export default HomePromo;
