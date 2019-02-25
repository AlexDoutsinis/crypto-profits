import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../sass/main.scss";
import axios from "axios";
import Home from "./Home";
import Results from "./Results";

const initialState = {
  location: "home",
  date: new Date(),
  data: "",
  btcToday: "",
  cryptoAmount: 1,
  status: "",
  totalStatus: {}
};

class App extends Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    this.btcToday();
  }

  btcToday = async () => {
    const dateNow = Date.now();

    const api = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${dateNow}&extraParams=crypto-profits`;

    const res = await axios.get(api);

    this.setState({ ...this.state, btcToday: res.data.BTC });
  };

  onInputChange = event => {
    this.setState({
      ...this.state,
      cryptoAmount: event.target.value
    });
  };

  checkProfit = async () => {
    const date = parseInt(
      (new Date(this.state.date).getTime() / 1000).toFixed(0)
    );

    const api = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${date}&extraParams=crypto-profits`;

    const res = await axios.get(api);

    this.setState({ ...this.state, data: res.data.BTC }, () => {
      const CP = this.state.data.USD;
      let newCP = this.state.cryptoAmount * 100;
      newCP = (newCP * CP) / 100;
      const SP = this.state.btcToday.USD;
      let newSP = this.state.cryptoAmount * 100;
      newSP = (newSP * SP) / 100;
      if (newCP < newSP) {
        const gain = newSP - newCP;
        const gainPercent = ((gain / newCP) * 100).toFixed(2);

        this.setState({
          ...this.state,
          location: "results",
          status: "gain",
          totalStatus: {
            newCP,
            CP,
            newSP,
            SP,
            percent: gainPercent
          }
        });
      } else {
        const loss = newCP - newSP;
        const lossPercent = ((loss / newCP) * 100).toFixed(2);

        this.setState({
          ...this.state,
          location: "results",
          status: "loss",
          totalStatus: {
            newCP,
            CP,
            newSP,
            SP,
            percent: lossPercent
          }
        });
      }
    });
  };

  routingSystem = () => {
    switch (this.state.location) {
      case "home":
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
            onInputChange={this.onInputChange}
            checkProfit={this.checkProfit}
          />
        );
        break;
      case "results":
        return <Results globalState={this.state} goBack={this.goBack} />;
        break;
      default:
        return <Home />;
    }
  };

  handleDateChange = date =>
    this.setState({
      ...this.state,
      date
    });

  goBack = () =>
    this.setState({ ...initialState, btcToday: this.state.btcToday });

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
