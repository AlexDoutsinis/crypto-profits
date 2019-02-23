import React, { Component } from "react";
import "../sass/main.scss";
import Home from "./Home";
import Results from "./Results";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="logo">Crypto Profits</div>
          <nav className="menu">
            <a href="#" className="main-btn">
              Register
            </a>
          </nav>
        </header>
        <Results />
      </div>
    );
  }
}

export default App;
