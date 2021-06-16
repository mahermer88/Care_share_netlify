import React, { useEffect, useReducer, useContext } from "react";
import reducerAssistant from "../reducer/reducer-assistant";

const AssistantContext = React.createContext();

// default state of assistant reducer
const defaultState = {
  isAssistant: true,
  assistantContent: "",
};

const AssistantProvider = ({ children }) => {
  const [stateAssistant, dispatchAssistant] = useReducer(
    reducerAssistant,
    defaultState
  );

  // close assistant function
  const closeAssistant = () => {
    dispatchAssistant({ type: "CLOSE" });
  };

  useEffect(() => {
    setTimeout(() => {
      closeAssistant();
    }, 4000);
    return () => {
      clearTimeout(() => {
        closeAssistant();
      }, 4000);
    };
  }, [stateAssistant.assistantContent]);

  return (
    <AssistantContext.Provider
      value={{
        stateAssistant,
        dispatchAssistant,
        closeAssistant,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistantContext = () => {
  return useContext(AssistantContext);
};

export { AssistantContext, AssistantProvider };
