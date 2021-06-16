import React, { useEffect } from "react";
import { useAssistantContext } from "../components/context/context-assistant";
import HomeIntroContainer from "../components/pages/home/Home_Intro_Container";
import HomeProductsContainer from "../components/pages/home/Home_Products_Container";

const Home = () => {
  const { dispatchAssistant } = useAssistantContext();

  useEffect(() => {
    dispatchAssistant({ type: "START" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeIntroContainer />
      <HomeProductsContainer />
    </>
  );
};

export default Home;
