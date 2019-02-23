import React, { Component } from "react";

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
          <input type="text" name="amount" />

          <label>Date</label>
          <input type="text" name="date" />

          <button type="submit">Check Profits</button>
        </div>
      </section>
    );
  }
}

export default Home;
