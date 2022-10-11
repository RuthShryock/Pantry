import React, {Component} from 'react';
import './SignUp.css';
import Login from "./FrontEnd"

export default class SignUp extends Component{
    
    render(){
        // Forgot password, e-mail verification
        return(
            <div className="loginDiv">
                <h1>Sign-Up</h1>
                <input placeholder="Username or E-mail"></input>
                <br />
                <input placeholder="Password"></input>
                <br />
                <button>Login</button>
                <br />
                <a href='/login'>Login</a>
            </div>
        );
    }
}