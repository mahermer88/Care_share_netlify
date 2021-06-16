import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../../context/context-user";
import idChecker from "../../handlers/handle-backend/handle-id-checker";
import {
  AiOutlineBorder,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import "./info-product.css";

const InfoProductContainer = ({ product }) => {
  const { name, price, company, colors, description } = product;
  const [cartFound, setCartFound] = useState(false);
  const history = useHistory();
  const { stateUser, dispatchUser, addToCartList, removeFromCartList } =
    useUserContext();

  useEffect(() => {
    if (stateUser.email) {
      if (idChecker(stateUser.cart.cartList, product)) {
        setCartFound(true);
      }
    }
  }, [stateUser, product]);

  return (
    <div className="product-info">
      <div className="additional-info">
        <h2>Name: {name}</h2>
        <h3>
          Price: <span className="price">${price / 100}</span>
        </h3>
        <h3>Company: {company}</h3>
        <h4>
          Colors:
          <i>
            <AiOutlineBorder
              fill={colors[0]}
              style={{ border: "var(--border)", backgroundColor: colors[0] }}
            />
          </i>
          <i>
            <AiOutlineBorder
              fill={colors[1]}
              style={{ border: "var(--border)", backgroundColor: colors[1] }}
            />
          </i>
        </h4>
        <p>{description}</p>
        <div className="additional-actions">
          <Link to="/">
            <i>
              <AiOutlineHome
                fill="var(--clr-purple-1)"
                onClick={() => history.goBack()}
              />
            </i>
          </Link>
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
        </div>
      </div>
      <div className="additional-images">
        <img id="info-images" src={product.img_full} alt="img" />
        <img src={product.img_large} alt="img" />
        <img src={product.img_small} alt="img" />
      </div>
    </div>
  );
};

export default InfoProductContainer;
