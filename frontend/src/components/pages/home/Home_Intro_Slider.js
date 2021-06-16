import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobalContext } from "../../context/context-global";

const HomeIntroSlider = () => {
  const { dataResponse } = useGlobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = dataResponse.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, dataResponse]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="intro-slider">
      <div className="section-center">
        {dataResponse.map((product, productIndex) => {
          const { _id, name, img_full } = product;
          let position = "nextSlide";
          if (productIndex === index) {
            position = "activeSlide";
          }
          if (
            productIndex === index - 1 ||
            (index === 0 && productIndex === dataResponse.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={_id} className={position}>
              <img src={img_full} alt={name} className="product-img" />
              <h1>{name}</h1>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HomeIntroSlider;
