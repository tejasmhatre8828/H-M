import React from "react";
import '../Styles/login.css';
import lock from "../assets/lock_.svg";

const Login = () => {

    return (
        <div id="body">
            <div id="info">
                <div id="login">
                    <div id="welcome">WELCOME</div>
                    <div id="member">
                        <div>
                            <h5>Sign in with your email
                                or
                                sign up to become an H&M</h5>
                        </div>
                        <div>
                            <h5> member.</h5>
                        </div>
                    </div>
                    <div><span>Email</span> <span style={{ color: "red" }}><sup>*</sup></span><br /><input type="email"
                        placeholder="Email" id="email" /></div>
                    <div><span>Password</span><br /><input type="password" placeholder="Password" id="password" /></div>
                    <button id="button">CONTINUE</button>
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