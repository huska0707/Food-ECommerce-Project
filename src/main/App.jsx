import React from "react";
import { Route, Routes } from "react";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import ContactUs from "../pages/Contact-us";
import Review from "../pages/Review";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
};

export default App;
