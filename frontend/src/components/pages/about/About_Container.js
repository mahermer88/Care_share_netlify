import React from "react";
import AboutMessageForm from "./About_Message_Form";
import AboutTeam from "./About_Team";
import "./about.css";

const AboutContainer = () => {
  return (
    <div className="details">
      <div className="details-info">
        <h1>CARE SHARE</h1>
        <p>
          CS CareShare store is a global supplier of new and reconditioned
          medical products.
        </p>
        <p>
          Our inventory consists of brand name samples and display items, as
          well as new products which become available as a result of surplus
          inventory, all offered at greatly reduced prices.
        </p>
      </div>

      <div className="details-contact">
        <div className="message">
          <AboutMessageForm />
        </div>
        <AboutTeam />
      </div>
    </div>
  );
};

export default AboutContainer;
