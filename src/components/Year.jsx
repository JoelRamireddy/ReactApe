import React, { Component } from "react";

import Term from "./Term.jsx";

class Year extends Component {
  render() {
    return (
      <div class="something">
        <div class="semesters">
          <Term
            catalog={this.props.catalog}
            data={this.props.data["fa"]}
            term="FALL"
            year={this.props.year}
          />
          <Term
            catalog={this.props.catalog}
            data={this.props.data["sp"]}
            term="SPRING"
            year={this.props.year}
          />
          <Term
            catalog={this.props.catalog}
            data={this.props.data["su"]}
            term="SUMMER"
            year={this.props.year}
          />
        </div>
      </div>
    );
  }
}

export default Year;
