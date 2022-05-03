import React, { Component } from "react";

import Term from "./Term.jsx";

class Year extends Component {
  render() {
    return (
      <React.Fragment>
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
          year={this.props.year + 1}
        />
        <Term
          catalog={this.props.catalog}
          data={this.props.data["su"]}
          term="SUMMER"
          year={this.props.year + 1}
        />
      </React.Fragment>
    );
  }
}

export default Year;
