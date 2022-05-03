import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  calculateCredits() {
    let tot = 0;

    if (this.props.plan && this.props.catalog) {
      const catCourses = this.props.catalog.courses;
      const planCourses = this.props.plan.courses;

      for (let key in planCourses) {
        tot += parseInt(catCourses[key].credits);
      }
    }
    return tot;
  }
  render() {
    function logOut() {
      window.location.reload(false);
    }
    if (this.props.plan) {
      return (
        <div class="header border-grid">
          <b>ACADEMIC PLANNING</b>
          <div class="header-buttons">
            <span>Student: {this.props.plan.student}</span>
            <span>|</span>
            <span>Name: {this.props.plan.name}</span>
            <span>|</span>
            <span>Credits: {this.calculateCredits()}</span>
            <button class="header-btn" onClick={logOut}>
              LOG OUT
            </button>
            <button class="header-btn">OPTIONS</button>
            <button class="header-btn">SAVE</button>
          </div>
        </div>
      );
    } else {
      return (
        <div class="header border-grid">
          <b>ACADEMIC PLANNING</b>
          <div class="header-buttons">
            <span>Name: CS</span>

            <span>Credits: {this.calculateCredits()}</span>
            <button class="header-btn" onClick={logOut}>
              LOG OUT
            </button>
            <button class="header-btn">OPTIONS</button>
            <button class="header-btn">SAVE</button>
          </div>
        </div>
      );
    }
  }
}

export default Banner;
