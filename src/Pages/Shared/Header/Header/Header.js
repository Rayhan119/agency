import React from "react";
import Banner from "../../../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-section">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
