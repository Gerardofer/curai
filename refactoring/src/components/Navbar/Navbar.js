import React, { Component } from "react";
import "./navbar.css";
import firstOpinion from "../../images/first-opinion.png";

class Navbar extends Component {
  state = {
    scroll: "no"
  };

  handleScroll(command) {
    this.setState({
      scroll: command
    });
  }

  render() {
    return (
      <div>
        <nav
          id="navbar"
          className="navbar sticky-top navbar-expand-lg navbar-light navbar-color navbar-color-after"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="http://www.firstopinionapp.com">
            <img id="first-opinion" src={firstOpinion} alt="First Opinion" />
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  HOW IT WORKS
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  OUR DOCTORS
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  MY ACCOUNT
                </a>
              </li>
            </ul>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">TALK TO A DOCTOR</button>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
