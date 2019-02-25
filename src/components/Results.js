import React, { Component } from "react";

class Results extends Component {
  checkGains = () => {
    const { percent, status } = this.props.globalState.totalStatus;

    return status === "gain" ? (
      <h4>You made {percent}% profit</h4>
    ) : (
      <h4>You loss {percent}% of your initial investment</h4>
    );
  };

  render() {
    const { newCP, newSP } = this.props.globalState.totalStatus;

    return (
      <section id="results">
        <div className="results-box">
          <div className="ads" />
          <h3>Your {newCP} dollar investment is now</h3>
          <h1>{newSP}</h1>
          {this.checkGains()}
          <a href="#" className="main-btn active">
            Create account to keep track all of your records
          </a>

          <a href="#" className="main-btn" onClick={this.props.goBack}>
            or Check Another Transaction
          </a>
        </div>
        <div className="ads" />
      </section>
    );
  }
}

export default Results;
