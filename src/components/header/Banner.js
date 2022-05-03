import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function logOut() {
      window.location.reload(false);
    }
    return (
      <div class="header border-grid">
        <b>ACADEMIC PLANNING</b>
        <div class="header-buttons">
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

export default Banner;
