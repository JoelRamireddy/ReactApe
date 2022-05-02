import React, {Component} from 'react'; 
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Ape from './components/Ape'; 
import Login from './components/Login'; 
 
class App extends Component {  
    constructor(props) {  
        super(props);   
        this.state = {
            isLoggedIn: false
         };
    }  

    render(){ 
        
        this.setLoggedIn = this.setLoggedIn.bind(this)
        return ( 
            <div className="wrapper"> 
                {this.state.isLoggedIn && <Ape setLoggedIn = {this.setLoggedIn}/>}
                {! this.state.isLoggedIn && <Login setLoggedIn = {this.setLoggedIn} />}	
            </div> 
            
        ); 
    } 

    setLoggedIn(tf){
        this.setState({isLoggedIn: tf});
    }
} 
 
export default App;
