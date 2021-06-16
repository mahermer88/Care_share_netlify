import React, { useEffect } from "react";
import { useAssistantContext } from "../components/context/context-assistant";
import AboutContainer from "../components/pages/about/About_Container";

const About = () => {
  const { dispatchAssistant } = useAssistantContext();

  useEffect(() => {
    dispatchAssistant({ type: "TEAM" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AboutContainer />
    </>
  );
};

export default About;
