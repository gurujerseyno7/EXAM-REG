import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header-content">
          <img src={Logo} alt="bootstrap" height={70} width={70} />
          <div className="navbar-headers">
            <h6 className="navbar-header1">
              PROFESSIONAL REGULATION COMMISSION
            </h6>
            <h5 className="navbar-header2">
              LICENSURE EXAMINATION & REGISTRATION INFORMATION SYSTEM
            </h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
