import React, { useEffect } from "react";
import '../Styles/login.css';
import lock from "../assets/lock_.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Store";
import api from "../services/axios.config";


const Register = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    const [activeTab, setActiveTab] = useState("register");
    const [role, setRole] = useState("user");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({ name: " ", email: " ", password: " ", role: "user" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleChangeRole = (event) => {
        setUserData({ ...userData, role: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userData.name || !userData.email || !userData.password || !userData.role) {
            alert("Please fill all fields");
            return;
        }
        try {
            if (userData.email && userData.password) {
                const response = await api.post("/auth/register", userData);
                if (response.data.success) {
                    dispatch(login(response.data.user))
                    // localStorage.setItem("user", JSON.stringify(response.data.user));
                    toast.success(response.data.message);
                    setUserData({
                        role: "",
                        name: "",
                        email: "",
                        password: ""
                    })
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error, "error in api call")
            toast.error(error)
        }

    };


    // const handleSubmit = async () => {
    //     try {
    //         const response = await api.post("/auth/register", userData); // userData includes role
    //         if (response.data.success) {
    //             dispatch(login(response.data.user)); // store in Redux
    //             toast.success(response.data.message);
    //             router("/"); // redirect after register
    //         } else {
    //             toast.error(response.data.message);
    //         }
    //     } catch (err) {
    //         console.log("Register error:", err.response?.data || err.message);
    //         toast.error("Registration failed");
    //     }
    // };

    useEffect(() => {
        if (user?.userId) {
            router("/")
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
                            onClick={() => { setActiveTab("login"); router("/") }}
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
                        <h5>Sign up to become an H&M member.</h5>
                    </div>

                    <div>
                        <label>Select Role: </label>
                        <select id="roleselect" name="role" value={userData.role} onChange={handleChangeRole}>
                            <option value="">Select</option>
                            <option value="user">user</option>
                            <option value="seller">seller</option>
                            <option value="admin">admin</option>
                        </select><br />

                        <label>Name </label><br />
                        <input style={{fontFamily: "Michroma"}} type="name" placeholder="Name" id="name" name="name" value={userData.name} onChange={handleChange} /><br />
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

export default Register;