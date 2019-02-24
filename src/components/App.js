import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../sass/main.scss";
import axios from "axios";
import Home from "./Home";
import Results from "./Results";

class App extends Component {
  state = {
    location: "home",
    date: new Date(),
    data: ""
  };

  routingSystem = () => {
    switch (this.state.location) {
      case "home":
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
          />
        );
        break;
      case "results":
        return <Results />;
        break;
      default:
        return <Home />;
    }
  };

  handleDateChange = date =>
    this.setState(
      {
        date
      },
      console.log(
        parseInt((new Date(this.state.date).getTime() / 1000).toFixed(0))
      )
    );

  apiCall = async () => {
    const api =
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1452680400&extraParams=crypto-profits";

    const res = await axios.get(api);

    this.setState({ ...this.state, data: res.data.BTC }, () =>
      console.log(this.state.data)
    );
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className="logo" onClick={this.apiCall}>
            Crypto Profits
          </div>
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
