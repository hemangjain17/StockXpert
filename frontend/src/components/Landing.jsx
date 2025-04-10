import React from "react";
import "./Landing.css";
import logo from "./images/logo.png";
import Navbar from "./landingNav";
const  Landing= () => {
  return (
    <>
        <Navbar/>
        <div className="landing_head">
          <img src={logo} alt="FraudGuard" width="250px" height="200px" />
            <h1>FraudGuard</h1>
            <p>We guard your assets, while they hide their disguise,
            Exposing the fraud beneath their lies.</p>
            
        </div>
    </>
  );
};

export default Landing;
