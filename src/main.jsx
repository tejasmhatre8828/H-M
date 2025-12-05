import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Store.js";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer position="top-right" />
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
