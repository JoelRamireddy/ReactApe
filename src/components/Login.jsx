import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <p>Username</p>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleNameChanged.bind(this)}
          />
        </label>
        <label>
          <p>Password</p>
          <input type="password" id="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value; // don't ask me why we don't need .value here

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ uname: user, password: pass }),
    };
    let tmp = this.props;
    fetch(
      "http://judah.cedarville.edu/~munoz/Project4/php/login.php",
      requestOptions
    )
      .then((res) => res.json())
      .then(function (data) {
        if (data.error === undefined) {
          tmp.setLoggedIn(true);
        } else {
          alert("not correct something");
        }
      });

    // if (pass.value === "password") {
    // }
  };

  handleNameChanged(event) {
    var name = event.target.value;
    this.setState({ username: name });
  }
}

export default Login;
