import React from 'react'
import { useState } from 'react';
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
