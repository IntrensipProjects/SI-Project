import React, {useState} from "react";
import axios from "axios";
import "./SignupComponent.css";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import logo from '../../../../assets/images/logo.png';
import {message} from "antd";

function SignupComponent(){
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const thelink={
        marginLeft:'8px'
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8888/USER-SERVICE/users', {
                fullName,
                email,
                password,
                jobTitle,
                phoneNumber
            });

            // Handle the response from the API
            console.log(response.data);

            message.info("Sign up successful!!")
            // Perform necessary actions after successful signup
            console.log('Signup successful');

            return <Link to="/congrats"/>;

                    }
        catch (error) {
            console.error(error);
        }
    // Reset form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setJobTitle("");
    setPhoneNumber("");
};
    return(
        <>
            <img
                className="signup-image"
                src={logo}
                alt="Logo"
            />
            <div className="signup-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <div>
                    <h3>Welcome to HGS System
     where you can manage all human resources
                    of the enterprise</h3>
                    <p className="sentence">Please fill in your information to set up your profile...</p>
                  </div>
                    <div className="field">
                    <input
                        type="text"
                        id="fullName"
                        placeholder= "Enter your full name "
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        required
                    />
                    </div>

                    <div className="field">
                    <input
                        type="email"
                        id="email"
                        placeholder= "Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    </div>

                    <div className="field">
                    <input
                        type="password"
                        id="password"
                        placeholder= "Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                         />
                    </div>

                    <div className="field">
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder= "Enter your job title "
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                        required
                    />
                    </div>

                    <div className="field">
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder= "Enter your phone number "
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required
                    />
                    </div>

                    <Link to="/congrats">
                        {/*disabled={!email || !password || !fullName || !jobTitle ||!phoneNumber}*/}
                    <button type="submit"
                            className="btn-signup">NEXT</button>
                    </Link>
                    <div className="login"><strong>Already have an account?</strong> <Link to="/login" style={thelink}>Login</Link></div>
            </form>
                </div>
        </>
    );

}

export default SignupComponent;