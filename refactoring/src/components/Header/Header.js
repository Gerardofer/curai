import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="opening-header body-text">
          Chat now.
          <br />
          Doctors available 24/7.
        </h1>
        <p className=" body-text">Connect with a doctor today</p>
      </div>
    </div>
  );
};

export default Header;
