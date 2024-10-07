import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Validation from "./pages/Validation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/validation" element={<Validation />} />
    </Routes>
  );
};

export default App;
