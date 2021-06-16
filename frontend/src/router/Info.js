import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../components/context/context-global";
import { useAssistantContext } from "../components/context/context-assistant";
import InfoProductContainer from "../components/pages/info/Info_Product_Container";

const Info = () => {
  const { dataResponse } = useGlobalContext();
  const { dispatchAssistant } = useAssistantContext();
  const { productId } = useParams();
  const product = dataResponse.filter((product) => product._id === productId);

  useEffect(() => {
    dispatchAssistant({ type: "ENJOY" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imagesInfo = document.getElementById("info-images");
  if (imagesInfo) {
    imagesInfo.addEventListener("click", () => {
      dispatchAssistant({ type: "SCROLL" });
      setTimeout(() => {
        dispatchAssistant({ type: "CLOSE" });
      }, 4000);
    });
  }

  return <>{product.length && <InfoProductContainer product={product[0]} />}</>;
};

export default Info;
