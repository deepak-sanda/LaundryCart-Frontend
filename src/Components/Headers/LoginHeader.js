import React from "react";
import "./LoginHeader.css"
const LoginHeader = () => {
  return (
    <div>
      <div className="login_header">
        <p className="icon">LAUNDRY</p>
        <div className="header_btns">
          <button className="home_btn">HOME</button>
          <button className="pricing_btn">PRICING</button>
          <button className="career_btn">CAREER</button>
          <button className="sign_in_btn">SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
