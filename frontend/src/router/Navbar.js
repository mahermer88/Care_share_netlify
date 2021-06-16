import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/context/context-global";
import { useUserContext } from "../components/context/context-user";
import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

const Navbar = () => {
  const { notification } = useGlobalContext();
  const { stateUser, dispatchUser } = useUserContext();

  const logOut = () => {
    localStorage.removeItem("user");
    dispatchUser({ type: "RESET" });
  };

  return (
    <nav>
      <div>
        <Link
          style={{ textDecoration: "none", color: "var(--clr-silver)" }}
          to="/"
        >
          <h1>CARE SHARE</h1>
        </Link>
      </div>
      <div className="notification">
        {notification && <p>{notification}</p>}
      </div>

      <div>
        <ul>
          <li>
            <Link to="/">
              <AiOutlineHome fill="var(--clr-silver)" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineQuestionCircle fill="var(--clr-silver)" />
            </Link>
          </li>
          <li>
            {stateUser.email ? (
              <AiOutlineLogout fill="red" onClick={() => logOut()} />
            ) : (
              <Link to="/cart">
                <AiOutlineUser fill="var(--clr-silver)" />
              </Link>
            )}
          </li>

          {stateUser.email && (
            <li>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <i>
                  <AiOutlineUser fill="var(--clr-silver)" />
                  {stateUser.cart.amount > 0 && (
                    <p className="total-amount">{stateUser.cart.amount}</p>
                  )}
                </i>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
