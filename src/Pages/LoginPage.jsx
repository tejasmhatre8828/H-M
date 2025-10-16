import React from "react";
import '../Styles/login.css';
import lock from "../assets/lock_.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields.");
        } else {
            toast.success("Login successful!");
            setTimeout(() => navigate("/home"), 1500);
        }
    };

    return (
        <div id="body">
            <div id="info">
                <div id="login" onSubmit={handleSubmit}>
                    <div id="welcome">WELCOME</div>
                    <div id="member">
                        <h5>Sign in with your email
                            or
                            sign up to become an H&M member.</h5>
                    </div>
                    <div>
                        <label>Email <span style={{ color: "red" }}><sup>*</sup></span></label><br />
                        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button id="continue" type="submit" onClick={handleSubmit}>continue</button>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div><img src={lock} alt="lock" style={{ width: "25px", height: "18px" }} /></div>
                        <div><span style={{ fontSize: "small" }}>All data is kept secure</span></div>
                    </div>
                    <div id="hm">H&M MEMBERSHIP</div>
                </div>
            </div>
        </div>
    );
};

export default Login;