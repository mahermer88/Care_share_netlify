import React from "react";
import { useAssistantContext } from "./components/context/context-assistant";
import Assistant from "./components/pages/assistant/Assistant";
import ReactRouterSetup from "./router";
import FooterContainer from "./components/pages/footer/Footer_Container";

const App = () => {
  const { stateAssistant } = useAssistantContext();

  return (
    <div className="app">
      <div className="container">
        <Assistant assistantContent={stateAssistant.assistantContent} />
        <ReactRouterSetup />
      </div>
      <div>
        <FooterContainer />
      </div>
    </div>
  );
};

export default App;
