import React, { useState, useEffect, useRef } from "react";
import LateralMenu from "../../components/lateralMenu";
import UserList from "../userList";
import { Redirect } from "react-router-dom";
import NavBar from "../../components/navBar";
import { useHistory } from "react-router";

import "./index.css";

const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [auth, setAuth] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const validate = () => {
      const item = localStorage.getItem("auth");
      if (item !== "true") {
        history.push("/");
      }
    };
    validate();
  }, []);

  const logOut = () => {
    localStorage.setItem("auth", false);
    history.push("/");
  };

  return (
    <div className="dashboard">
      <LateralMenu menuOpen={openMenu}></LateralMenu>
      <div className="dashboard-content">
        <NavBar
          backEvent={() => logOut()}
          buttonEvent={() => setOpenMenu(!openMenu)}
          userName="Jean"
        />
        <div className="dashboard-functions">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
