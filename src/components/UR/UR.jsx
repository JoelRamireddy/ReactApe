import React, { Component } from "react";
import Year from "../Year.jsx";

class UpperRight extends Component {
  render() {
    var yrs = "";
    if (this.props.plan && this.props.plan.years) {
      yrs = this.props.plan.years.map((value, key) => {
        return <Year catalog={this.props.catalog} year={key} data={value} />;
      });
    }
    return (
      <div id="UR">
        <div class="scroll border-grid">
          {/* YEAR component goes here */}

          <div class="semesters"></div>
          <div id="plan">{yrs}</div>
        </div>
      </div>
    );
  }
}

export default UpperRight;
