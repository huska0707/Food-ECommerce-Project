import React from "react";
import { Route, Routes } from "react";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
