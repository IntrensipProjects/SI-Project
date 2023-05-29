import './LoginComponent.css';
import React, {useState} from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from "../../../../assets/images/logo.png";
import {Link} from "react-router-dom";
function LoginComponent(){
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="container">
            <form className="login-form">
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
                    <div className="signUp"><strong>No Account?</strong> <Link to="/signup">Signup</Link>
                    </div>
                </form>
        </div>
    );

}

export default LoginComponent;