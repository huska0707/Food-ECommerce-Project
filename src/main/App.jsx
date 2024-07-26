import React from "react";
import { Route, Routes } from "react";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default App;
