import './LoginComponent.css';
import React, {useState} from "react";
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from "../../../../assets/images/logo.png";
import { Link} from "react-router-dom";
import {message} from "antd";
function LoginComponent(){
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const field={
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
    };
    const linkofpage={
        marginLeft:'10px'
    }

    const onSubmit = async (e) => {
        e.preventDefault();
            const response = await axios.post(
                'http://localhost:8888/USER-SERVICE/users',
                { email, password }
            ).then((response) => {
            message.success('Login successful!');
            return <Link to="/home" />;
            })
            .catch ((err) => {
            if (!err?.response) {
                message.error('No Server Response');
            } else if (err.response?.status === 400) {
                message.error('Missing Email or Password');
            } else if (err.response?.status === 401) {
                message.error('Unauthorized');
            } else {
                message.error('Login Failed');
            }
            });
        setEmail("");
        setPassword("");
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="login-container">
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
                        style={field} />
    {/*                <span className="toggle-pass" onClick={togglePasswordVisibility}>*/}
    {/*{showPassword ?  <FaEye />: <FaEyeSlash />}*/}
    {/*                </span>*/}
                </div>
<br/>
                <div className="forgot-password">Forgot my password?</div>
                <br/>

                {/*disabled={!email || !password}*/}
                <Link to="/home">
                    <button type="submit"   className="btn-login">Login</button>
                </Link>
                    <div className="signUp"><strong>No Account?</strong> <Link to="/signup" style={linkofpage}>Signup</Link>
                    </div>
                </form>
        </div>
    );

}

export default LoginComponent;