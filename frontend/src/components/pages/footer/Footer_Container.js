import React from "react";
import FooterList from "./Footer_List";
import Map from "./Footer_MAP";
import FooterCopyRight from "./Footer_CopyRight";
import "./footer.css";

const FooterContainer = () => {
  return (
    <footer>
      <div className="table-map">
        <FooterList />
        <Map />
      </div>
      <div className="copy-right">
        <FooterCopyRight />
      </div>
    </footer>
  );
};

export default FooterContainer;
