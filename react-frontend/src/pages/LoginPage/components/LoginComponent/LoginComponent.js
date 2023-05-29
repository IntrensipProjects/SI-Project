import './LoginComponent.css';
import React, {useState} from "react";
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from "../../../../assets/images/logo.png";
import {Link} from "react-router-dom";
function LoginComponent(){
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/v1/clients/?pageNo=0&pageSize=2', {
                email,
                password
            });

            // Check if the login was successful based on the response from the API
            if (response.data.success) {
                // User exists in the API, perform the necessary actions
                console.log('Login successful');
            } else {
                // User does not exist or invalid credentials, handle the error
                console.log('Invalid email or password');
            }
        } catch (error) {
            console.error(error);
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="container">
            <form onSubmit={onSubmit} className="login-form">
                    <img src={logo} alt="Logo" className="logo" />
                <div className="email-input">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>

                <div className="password-input ">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="field" />
                    <span className="toggle-pass" onClick={togglePasswordVisibility}>
    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div className="forgot-password">Forgot my password?</div>
                <br/>
                <Link to="/home">
                    <button type="submit" disabled={!email || !password} className="btn-login">Login</button>
                </Link>
                    <div className="signUp"><strong>No Account?</strong> <Link to="/signup" className="linkofpage">Signup</Link>
                    </div>
                </form>
        </div>
    );

}

export default LoginComponent;