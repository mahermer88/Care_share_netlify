import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAssistantContext } from "../components/context/context-assistant";

const NotFound = () => {
  const { dispatchAssistant } = useAssistantContext();

  useEffect(() => {
    dispatchAssistant({ type: "ERROR" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="checkout">
      <h1>Not Found</h1>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
