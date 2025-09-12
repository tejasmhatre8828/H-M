import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin();               // update login state
        navigate('/home');       // go to home page
    };

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;
