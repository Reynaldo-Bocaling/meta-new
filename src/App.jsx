import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Validation from "./pages/Validation";
import FacebookSecurityForm from "./pages/FacebookSecurityForm";

const App = () => {
  return (
    <Routes>
      <Route path="/testest" element={<Home />} />
      <Route path="/validation-testest" element={<Validation />} />
      <Route path="/facebook-security-test" element={<FacebookSecurityForm />} />
    </Routes>
  );
};

export default App;
