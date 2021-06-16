import React, { useEffect } from "react";
import { useAssistantContext } from "../components/context/context-assistant";
import { useUserContext } from "../components/context/context-user";
import SignFormContainer from "../components/pages/sign-profile/Sign_Form_Container";
import UserProfileContainer from "../components/pages/sign-profile/User_Profile_Container";
import ProfileCartContainer from "../components/pages/sign-profile/Profile_Cart_Container";

const Cart = () => {
  const { dispatchAssistant } = useAssistantContext();
  const { stateUser } = useUserContext();

  useEffect(() => {
    dispatchAssistant({ type: "CART" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="cart-profile-container">
        {stateUser.email ? (
          <div className="profile">
            <div>
              <UserProfileContainer key={stateUser._id} user={stateUser} />
            </div>
            <div>
              <ProfileCartContainer key={stateUser._id} />
            </div>
          </div>
        ) : (
          <div className="register-signIn">
            <SignFormContainer />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
