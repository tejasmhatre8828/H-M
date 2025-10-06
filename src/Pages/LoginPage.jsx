import React from "react";
import '../Styles/login.css';
import lock from "../assets/lock_.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Login successful!");
                localStorage.setItem("token", data.token);
                setTimeout(() => navigate("/home"), 1500);
            } else {
                toast.error(data.error || "Login failed.");
            }
        } catch (err) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button id="continue" type="submit" disabled={loading}>{loading ? "Logging in..." : "CONTINUE"}</button>

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