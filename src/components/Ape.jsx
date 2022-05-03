import React, { Component } from "react";
import Term from "./Term.jsx";
import UR from "./UR/UR.jsx";
import UL from "./UL/UL.jsx";
import LR from "./LR/LR.jsx";
import Year from "./Year.jsx";
import Banner from "./header/Banner.jsx";
import "./Ape.css";
//import Banner from './components/Banner';
//import UpperRight from './components/UpperRight';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requirements: null,
      plan: null,
      planList: null,
      catalog: null,
    };
  }

  loadNewPlan() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ joel: 0 }),
    };
    fetch(
      "http://judah.cedarville.edu/~munoz/Project4/html/getCombined.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          plan: this.convertPlan(data.plan),
          planList: data.planList,
          catalog: data.catalog,
        })
      );

    fetch(
      "http://judah.cedarville.edu/~munoz/Project4/html/getRequirements.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ requirements: data }));
  }

  componentDidMount() {
    this.loadNewPlan();
    let scr =
      '<script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>';
  }

  convertPlan(currPlan) {
    currPlan.years = [];
    for (var key in currPlan.courses) {
      var course = currPlan.courses[key];
      var currYear = course.year;
      if (currPlan.years[currYear] === undefined) {
        currPlan.years[currYear] = [];
        currPlan.years[currYear]["year"] = currYear;
        currPlan.years[currYear]["fa"] = [];
        currPlan.years[currYear]["sp"] = [];
        currPlan.years[currYear]["su"] = [];
      }
      if (course.term === "Fall") {
        currPlan.years[currYear]["fa"][course.id] = course;
      } else if (course.term === "Spring") {
        currPlan.years[currYear]["sp"][course.id] = course;
      } else {
        currPlan.years[currYear]["su"][course.id] = course;
      }
    }
    return currPlan;
  }

  logout() {
    this.props.setLoggedIn(false);
  }

  render() {
    return (
      <div className="App" id="main">
        <Banner plan={this.state.plan} catalog={this.state.catalog} />
        <div class="container border-grid">
          <div id="UL">
            <UL req={this.state.requirements} catalog={this.state.catalog} />
          </div>
          <UR plan={this.state.plan} catalog={this.state.catalog}>
            <div id="semesters"></div>
          </UR>
          <div class="LL border-grid"></div>
          <div class="LR border-grid">
            <LR catalog={this.state.catalog} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
