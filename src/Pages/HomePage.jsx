import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const HomePage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page!</h2>
      <p>You are logged in.</p>
    </div>
  );
};

export default HomePage;
