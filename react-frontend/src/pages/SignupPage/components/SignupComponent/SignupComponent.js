import React, {useState} from "react";
import axios from "axios";
import "./SignupComponent.css";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import logo from '../../../../assets/images/logo.png';

function SignupComponent(){
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/v1/clients/?pageNo=0&pageSize=2', {
                fullName,
                email,
                password,
                jobTitle,
                phoneNumber
            });

            // Handle the response from the API
            console.log(response.data);

            // Perform necessary actions after successful signup
            console.log('Signup successful');

        } catch (error) {
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
            <div className="container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <br/>
                    <div>
                    <h3>Welcome to HGS System
     where you can manage all human resources
                    of the enterprise</h3>
                    <p className="sentence">Please fill in your information to set up your profile...</p>
                  </div>
                    <br/>
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
                    <span className="toggle-password" onClick={togglePasswordVisibility}>
    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
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
                    <br/>
                    <Link to="/congrats">
                    <button type="submit" disabled={!email || !password || !fullName || !jobTitle ||!phoneNumber}
                            className="btn-signup">NEXT</button>
                    </Link>
                    <div className="login"><strong>Already have an account?</strong> <Link to="/login" className="thelink">Login</Link></div>
            </form>
                </div>
        </>
    );

}

export default SignupComponent;