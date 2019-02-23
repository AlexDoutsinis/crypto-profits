import React, { Component } from "react";
import "../sass/main.scss";
import Home from "./Home";
import Results from "./Results";

class App extends Component {
  state = {
    location: "home"
  };

  routingSystem = () => {
    switch (this.state.location) {
      case "home":
        return <Home />;
        break;
      case "results":
        return <Results />;
        break;
      default:
        return <Home />;
    }
  };

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
        {this.routingSystem()}
      </div>
    );
  }
}

export default App;
