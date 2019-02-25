import React, { Component } from "react";
import DatePicker from "react-datepicker";

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="logo-box">
          <img className="bitcoin-logo" src="/img/bitcoin-logo.png" alt="" />
        </div>

        <div className="right-box">
          <h2>Enter Transaction</h2>
          <label>Crypto Amount</label>
          <input
            type="text"
            name="amount"
            onChange={this.props.onInputChange}
            value={this.props.globalState.cryptoAmount}
          />

          <label>Date</label>
          <DatePicker
            selected={this.props.globalState.date}
            onChange={this.props.handleDateChange}
          />
          <button type="submit" onClick={this.props.checkProfit}>
            Check Profits
          </button>
        </div>
      </section>
    );
  }
}

export default Home;
