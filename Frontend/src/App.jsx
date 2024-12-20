import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster, resolveValue } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import OrderSuccessful from "./Pages/OrderSuccessful/OrderSuccessful";
import MyOrders from "./Pages/MyOrders/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/orderSuccess" element={<OrderSuccessful />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        {location.pathname !== "/cart" && <Footer />}
        {/* <Footer /> */}
        <Toaster />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
