import React, { Component } from "react";
class UL extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>REQUIRED</h1>
        <div id="Required_div">
          <p>this is a test</p>
        </div>
        <h2>ELECTIVES</h2>
        <div id="Electives_div">
          <p>this is a test</p>
        </div>
        <h3>REQUIRED COGNATES</h3>
        <div id="Cognates_div">
          <p>this is a test</p>
        </div>
      </React.Fragment>
    );
  }
}

export default UL;
