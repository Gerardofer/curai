import React from "react";
import "./header.css";
import DoctorForm from "../doctorForm/DoctorForm";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="opening-header body-text">
          Chat now.
          <br />
          Doctors available 24/7.
        </h1>
        <h3 className="body-text">Connect with a doctor today</h3>
        <DoctorForm />
      </div>
    </div>
  );
};

export default Header;
