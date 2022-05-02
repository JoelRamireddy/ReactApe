import React, {Component} from 'react';
 
class Login extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: ""
        }
    }

render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                <p>Username</p>
                <input type="text" id="username" value={this.state.username} onChange={this.handleNameChanged.bind(this)}/>	
            </label>
            <label>
                <p>Password</p>
                <input type="password" id="password"/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    };

    handleSubmit(event){
        event.preventDefault();
        let pass = document.getElementById("password");
        if(pass.value === "password"){
            this.props.setLoggedIn(true); 
        }
          
    }

    handleNameChanged(event){
        var name = event.target.value;
        this.setState({username: name})
    }

        
}
 
export default Login;
