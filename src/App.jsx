import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginPage';
import Home from './Pages/home';
import Header from './component/Header';
import Footer from './component/Footer';
import Mens from './Pages/mens';
import Ladies from './Pages/Ladies';
import Kids from './Pages/Kids';
import SingleProduct from './Pages/singleProduct';
import OrderSuccessfull from './component/user/ordersuccessful';
import { ToastContainer } from 'react-toastify';
import UploadProduct from './Pages/uploadProduct';
import Register from './Pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './Pages/homepage';
import Profile from './Pages/Profile';
import api from '../src/services/axios.config';
import { login } from './Redux/Store';
import AddProduct from './component/seller/AddProducts';
import ViewSellersProduct from './component/seller/ViewSellersProduct';
import SingleProductSeller from './component/seller/SingleProductSeller';
import AllProducts from './component/user/AllProducts';
import ViewSingleProduct from './component/user/ViewSingleProduct';
import MyCart from './component/user/MyCart';
import Favourites from './component/user/Favorite';
import Dashboard from './component/seller/Dashboard';
import AdminDashboard from './component/admin/AdminDashboard';
import Payment from './component/user/Payment';
import OrderSuccess from './component/user/Succefull';
import ViewUsers from './component/admin/viewUsers';
import ViewSellers from './component/admin/viewSellers';
import ViewProducts from './component/admin/viewProducts';
import ViewAllOrders from './component/admin/viewOrders';

function App() {

  const dispatch = useDispatch()
  const [users, setUsers] = useState();
  const user = useSelector((state) => state.counter.user);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  async function getUserData() {
    try {
      const response = await api.get("/auth/get-current-user")
      // const response = await axios.get("http://localhost:3000/api/v1/auth/get-current-user");
      // console.log("user Data", response.data)
      if (response.data.success) {
        dispatch(login(response.data.user));
      }
    } catch (error) {
      console.log("error in fetching user data", error);
    }
  }

  useEffect(() => {
    if (user) {

    } else {
      getUserData()
    }
  }, [user])



  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/ladies" element={<Ladies />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/ordersuccessfull" element={<OrderSuccessfull />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/uploadproduct" element={<UploadProduct />} />


          {/* seller */}
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/view-sellers-product" element={<ViewSellersProduct />} />
          <Route path="/single-product-seller/:productId" element={<SingleProductSeller />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* user */}
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product-details/:productId" element={<ViewSingleProduct />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ViewUsers />} />
          <Route path="/admin/sellers" element={<ViewSellers />} />
          <Route path="/admin/products" element={<ViewProducts />} />
          <Route path="/admin/orders" element={<ViewAllOrders />} />

        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
