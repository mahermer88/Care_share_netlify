import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useUserContext } from "../../context/context-user";

const ProfileWishItem = ({ product }) => {
  const { removeFromWishlist, dispatchUser } = useUserContext();

  return (
    <article key={product._id} className="item">
      <img src={product.img_full} alt={product.name} />
      <div>
        <h6>{product.name}</h6>
        <h4 className="item-price">${product.price / 100}</h4>
      </div>
      <div>
        <AiOutlineHeart
          className="icon"
          style={{ color: "red", fontSize: "2rem" }}
          onClick={() => removeFromWishlist(product, dispatchUser)}
        />
      </div>
    </article>
  );
};

export default ProfileWishItem;
