import React from 'react'
import { useState } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginPage';
import Home from './Pages/homePage';
import Header from './component/Header';
import Footer from './component/Footer';
import Mens from './Pages/mens';
import SingleProduct from './Pages/singleProduct';
import OrderSuccessfull from './Pages/ordersuccessful';
import { ToastContainer } from 'react-toastify';
import Cart from './Pages/cart';

function App() {

  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="men" element={<Mens />} />
          <Route path="singleproduct" element={<SingleProduct />} />
          <Route path="ordersuccessfull" element={<OrderSuccessfull />} />
          <Route path="cart" element={<Cart />} />

        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
