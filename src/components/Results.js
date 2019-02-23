import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <section id="results">
        <div className="results-box">
          <div className="ads" />
          <h3>Your $1200 dollar inverstment is now</h3>
          <h1>$7300</h1>
          <h4>You made 400% profit</h4>
          <a href="#" className="main-btn active">
            Create account to keep track all of your records
          </a>
        </div>
        <div className="ads" />
      </section>
    );
  }
}

export default Results;
