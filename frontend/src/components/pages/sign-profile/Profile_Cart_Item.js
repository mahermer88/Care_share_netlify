import React from "react";
import { useUserContext } from "../../context/context-user";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ProfileCartItem = ({ product }) => {
  const { _id, img_full, name, price, amount } = product;
  const { removeFromCartList, dispatchUser, toggleAmount } = useUserContext();

  return (
    <article className="item">
      <img src={img_full} alt={name} />
      <div>
        <h6>{name}</h6>
        <h4 className="item-price">${price / 100}</h4>
        <button
          className="remove-btn"
          onClick={() => removeFromCartList(product, dispatchUser)}
        >
          remove
        </button>
      </div>
      <div>
        <IoIosArrowUp
          className="amount-btn"
          onClick={() => toggleAmount(_id, "inc", dispatchUser)}
        />
        <p className="amount">{amount}</p>
        <IoIosArrowDown
          className="amount-btn"
          onClick={() => toggleAmount(_id, "dec", dispatchUser)}
        />
      </div>
    </article>
  );
};

export default ProfileCartItem;
