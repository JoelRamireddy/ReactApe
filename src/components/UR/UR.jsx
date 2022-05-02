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
          <div class="semesters">
            <div class="card" id="fa2019">
              FALL 2019
            </div>
            <div class="card" id="sp2020">
              SPRING 2020
            </div>
            <div class="card" id="sum2020">
              SUMMER 2020
            </div>
            <div class="card" id="fa2020">
              FALL 2020
            </div>
            <div class="card" id="sp2021">
              SPRING 2021
            </div>
            <div class="card" id="sum2021">
              SUMMER 2021
            </div>
            <div class="card" id="fa2021">
              FALL 2021
            </div>
            <div class="card" id="sp2022">
              SPRING 2022
            </div>
            <div class="card" id="sum2022">
              SUMMER 2022
            </div>
            <div class="card" id="fa2022">
              FALL 2022
            </div>
            <div class="card" id="sp2023">
              SPRING 2023
            </div>
            <div class="card" id="sum2023">
              SUMMER 2023
            </div>
          </div>
        </div>
        <div id="plan">{yrs}</div>
      </div>
    );
  }
}

export default UpperRight;
