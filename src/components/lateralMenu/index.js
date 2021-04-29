import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const LateralMenu = ({ menuOpen }) => {
  return (
    <div className={menuOpen ? "lateral-menu" : "lateral-menu-collapsed"}>
      <div className="header-menu">
        <div className="profile-header"></div>
        {menuOpen ? (
          <div className="title-profile">
            <span>OLSoftware</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="buttons-menu">
        <div className="item-menu">
          <div className="item-icon-menu">
            <FontAwesomeIcon size="2x" color="white" icon={faCoffee} />
          </div>
          {menuOpen ? <div className="title-item">Programación</div> : ""}
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
