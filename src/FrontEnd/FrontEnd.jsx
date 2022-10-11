import React, {Component} from 'react';
import './FrontEnd.css';

export default class FrontEnd extends Component{

    render(){
        // Forgot password, e-mail verification
        return(
            <div className="loginDiv">
                <h1>Login</h1>
                <input placeholder="Username or E-mail"></input>
                <br/>
                <input placeholder="Password"></input>
                <br/><br/>
                <button>Login</button>
                <br/><br/>
                <text>Not registered? </text><a href="/signup">Sign Up</a>
            </div>
        );
    }
}