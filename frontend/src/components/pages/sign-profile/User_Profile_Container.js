import React from "react";
import { useAssistantContext } from "../../context/context-assistant";
import { useUserContext } from "../../context/context-user";
import ProfileMessageItem from "./Profile_Message_Item";
import ProfileWishItem from "./Profile_Wish_Item";
import deleteUser from "../../handlers/handle-backend/handle-delete-user";
import image from "../../../data/profile_me.png";

import "./profile-container.css";

const UserProfileContainer = ({ user }) => {
  const { username, email, createdAt, messages, wishlist } = user;
  const { dispatchUser } = useUserContext();
  const { dispatchAssistant } = useAssistantContext();

  return (
    <div className="user-details">
      <div className="user-account" key={user._id}>
        <div className="user-profile">
          <img src={image} alt="profile_me" className="profile-icon" />

          <div>
            <h4>Username: {username}</h4>
            <p className="title">Email: {email}</p>
            <p className="text">CreatedAt: {createdAt}</p>
          </div>
        </div>

        <div className="user-account-btn">
          <button
            className="btn"
            onClick={() => deleteUser(user, dispatchUser, dispatchAssistant)}
          >
            Delete Account
          </button>
        </div>
        <div className="user-messages">
          {(messages.length &&
            messages.map((message) => {
              return <ProfileMessageItem key={message._id} message={message} />;
            })) || <h5>you do not have any message</h5>}
        </div>
      </div>

      <div className="user-wishlist">
        {wishlist.length ? (
          wishlist.map((product) => {
            return <ProfileWishItem key={product._id} product={product} />;
          })
        ) : (
          <h5>your wishlist is empty</h5>
        )}
      </div>
    </div>
  );
};

export default UserProfileContainer;
