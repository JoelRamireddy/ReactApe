import React, { Component } from "react";

class LR extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>LR component (Datatables)</p>
        <table id="LR_table" class="display"></table>
      </React.Fragment>
    );
  }
}

export default LR;
