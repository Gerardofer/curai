import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="backgroun-image">
        <Navbar />
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
