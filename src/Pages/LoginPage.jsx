import React, { useEffect } from "react";
import '../Styles/login.css';
import lock from "../assets/lock_.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from '../services/axios.config';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Store";


const LoginPage = () => {
    const router = useNavigate();
    const [activeTab, setActiveTab] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector((state) => state.counter.user);
    console.log(user, "user")


    const [userData, setUserData] = React.useState({ email: " ", password: " " });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userData.email || !userData.password) {
            alert("Please fill all fields");
            return;
        }
        try {
            if (userData.email && userData.password) {
                const response = await api.post("/auth/login", userData);
                if (response.data.success) {
                    dispatch(login(response.data.user))
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    toast.success(response.data.message);
                    setUserData({
                        email: "",
                        password: ""
                    })
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error, "error in api call")
            alert(error)
        }
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await api.post("/auth/login", userData);
    //         if (response.data.success) {
    //             dispatch(login(response.data.user));

    //             // Call get-current-user immediately if needed
    //             toast.success(response.data.message);
    //             setUserData({ email: "", password: "" });
    //         } else {
    //             toast.error(response.data.message);
    //         }
    //     } catch (error) {
    //         console.log("error in api call", error.response?.data || error.message);
    //         toast.error("Login failed");
    //     }
    // };

    useEffect(() => {
        if (user?.userId) {
            if (user.role === "seller") {
                router("/add-product");
            } else if (user.role === "admin") {
                router("/admin/dashboard");
            } else {
                router("/");
            }
        }
    }, [user])


    return (
        <div id="body">
            <div id="info">
                <form id="login" onSubmit={handleSubmit}>
                    <div id="welcome">WELCOME</div>

                    <div id="signbtns">
                        <button
                            type="button"
                            id="logbtn"
                            className={activeTab === "login" ? "active" : ""}
                            onClick={() => { setActiveTab("login"); router("/login") }}
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            id="regbtn"
                            className={activeTab === "register" ? "active" : ""}
                            onClick={() => { setActiveTab("register"); router("/register") }}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div id="member">
                        <h5>Sign in to become an H&M member.</h5>
                    </div>

                    <div>
                        <label>Email <span style={{ color: "red" }}><sup>*</sup></span></label><br />
                        <input style={{fontFamily: "Michroma"}} type="email" placeholder="Email" id="email" name="email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input style={{fontFamily: "Michroma"}} type={showPassword ? "text" : "password"} placeholder="Password" id="password" name="password" value={userData.password} onChange={handleChange} /><br />
                        <button className="showhide" onClick={() => setShowPassword(!showPassword)} type="button">
                            {showPassword ? "Hide" : "Show"}</button>
                    </div>

                    <button id="continue" type="submit" onClick={handleSubmit}>continue</button>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div><img src={lock} alt="lock" style={{ width: "25px", height: "18px" }} /></div>
                        <div><span style={{ fontSize: "small" }}>All data is kept secure</span></div>
                    </div>
                    <div id="hm">H&M MEMBERSHIP</div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;