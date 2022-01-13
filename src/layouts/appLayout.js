import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Profile from "../components/Profile/Profile";
import "./appLayout.css";
import { useKeycloak } from "@react-keycloak/web";
import { useHistory } from "react-router-dom";

const WebLayout = ({ children, pageTitle }) => {
  const { keycloak } = useKeycloak();
  const history = useHistory();

  return (
    <div style={style}>
      {
      keycloak.authenticated ? 
        <>
          <Sidebar />
          <div style={style2} className="profile-layout">
            <Profile pageTitle={pageTitle} />
            {children}
          </div>
        </> : 
        <div style={{ flex: 1, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <p>You need to login to view this page</p>
            <button style={{ display: 'block', margin: '0 auto', marginTop: '1rem' }} onClick={() => keycloak.login()}>Login</button>
            <button style={{ display: 'block', margin: '0 auto', marginTop: '1rem' }} onClick={() => history.push('/')}>Visit Website</button>
          </div>
        </div>
      }
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-between",
};

const style2 = {
  flex: 1,
};

export default WebLayout;
