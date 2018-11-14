import React, { Component } from "react";
import "./navbar.css";
import firstOpinion from "../../images/first-opinion.png";
// import background1 from "../../images/background-1.jpg";

class Navbar extends Component {
  state = {
    scroll: "no"
  };
  
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if(event.srcElement.documentElement.scrollTop > 2){
      this.setState({
        scroll: "yes"
      });
      
    } else {
        this.setState({
          scroll: "no"
        });
      }
      // console.log("Scrolling!!!", event.srcElement.documentElement.scrollTop);
      // console.log(this.state);
    }
    

  render() {
    return (
      <div>
        <nav
          id="navbar"
          className={`navbar sticky-top navbar-expand-lg navbar-light navbar-color navbar-color-after ${(this.state.scroll === "yes") ? "scrolled-nav" : "scrolled-nav-top"} `}
          onScroll={() => {this.handleScroll("yes")}}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-links"
            aria-controls="nav-links"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="http://www.firstopinionapp.com">
            <img id="first-opinion" src={firstOpinion} alt="First Opinion" />
          </a>

          <div className="collapse navbar-collapse justify-content-end" id="nav-links">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOW IT WORKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR DOCTORS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MY ACCOUNT
                </a>
              </li>
            </ul>
              <button id="talk-to-doctor" className="btn btn-outline-success my-2 my-sm-0" type="submit">TALK TO A DOCTOR</button>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
