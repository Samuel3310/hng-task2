import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import NavBar from "./components/navbar";
import { Logo } from "./index.js";
import CartItem from "./components/cart-item/index.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar img={Logo} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
