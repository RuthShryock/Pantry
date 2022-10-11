import React, {Component} from 'react';
import './SignUp.css';
import Login from "./FrontEnd"

export default class SignUp extends Component{
    
    render(){
        // Forgot password, e-mail verification
        return(
            <div className="loginDiv">
                <h1>Sign-Up</h1>
                <input placeholder="First Name"></input>
                <br/>
                <input placeholder="Last Name"></input>
                <br/>
                <input placeholder="E-mail"></input>
                <br/>
                <input placeholder="Password"></input>
                <br/>
                <input placeholder="Confirm Password"></input>
                <br/><br/>
                <button>Signup</button>
                <br/><br/>
                <text>Already Registered? </text><a href='/login'>Login</a>
            </div>
        );
    }
}