import React from 'react'
import { useState } from 'react';
// import './App.css'
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import { Route, Routes } from "react";
// import './home.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  )
}

export default App;
