import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/context-user";
import { defaultImage } from "../../../data/fake_default_image";
import idChecker from "../../handlers/handle-backend/handle-id-checker";
import {
  AiOutlineInfoCircle,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const HomeProductCard = ({ product }) => {
  const [like, setLike] = useState(false);
  const [cartFound, setCartFound] = useState(false);
  const { name, price, img_full } = product;
  const productId = product._id;
  const {
    stateUser,
    dispatchUser,
    addToWishlist,
    removeFromWishlist,
    addToCartList,
    removeFromCartList,
  } = useUserContext();

  useEffect(() => {
    if (stateUser.email) {
      if (idChecker(stateUser.wishlist, product)) {
        setLike(true);
      }
      if (idChecker(stateUser.cart.cartList, product)) {
        setCartFound(true);
      }
    }
  }, [stateUser, like, cartFound, product]);

  return (
    <div className="card">
      <div className="card-info">
        <h3>{name || `Ikea`}</h3>
        <Link to={`/info/${productId}`}>
          <img src={img_full || defaultImage} alt={name || `Ikea`} />
        </Link>

        <p className="info-price">${price / 100 || 3.99}</p>
      </div>
      <div className="card-actions">
        <i>
          {like ? (
            <AiOutlineHeart
              style={{ color: "red" }}
              onClick={() => removeFromWishlist(product, dispatchUser)}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => addToWishlist(product, dispatchUser)}
            />
          )}
        </i>
        <i>
          {cartFound ? (
            <AiOutlineMinusCircle
              style={{ color: "red" }}
              onClick={() => removeFromCartList(product, dispatchUser)}
            />
          ) : (
            <AiOutlinePlusCircle
              onClick={() => addToCartList(product, dispatchUser)}
            />
          )}
        </i>
        <Link to={`/info/${productId}`}>
          <i>
            <AiOutlineInfoCircle style={{ color: "#22161c" }} />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default HomeProductCard;
