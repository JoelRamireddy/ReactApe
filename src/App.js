import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ape from "./components/Ape";
import Login from "./components/Login";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  // startUp() {
  //   $("#data-table").DataTable({
  //     paging: false,
  //     dom: "lifrtp",
  //     fixedColumns: {
  //       heightMatch: "none",
  //     },
  //   });
  // }
  render() {
    this.setLoggedIn = this.setLoggedIn.bind(this);
    return (
      <div className="wrapper">
        {this.state.isLoggedIn && <Ape setLoggedIn={this.setLoggedIn} />}
        {!this.state.isLoggedIn && <Login setLoggedIn={this.setLoggedIn} />}
      </div>
    );
  }

  setLoggedIn(tf) {
    this.setState({ isLoggedIn: tf });
  }
}

export default App;
