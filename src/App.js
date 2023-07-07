import React from "react";

import { Route, Routes } from "react-router-dom";
import NavLink from "./components/navbar/NavLink";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Registration from "./components/registration/Registration";
import Card from "./components/card/Card";
import Certificate from "./components/certificate/Certificate";
import Verify from "./components/verify/Verify";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavLink />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/card" element={<Card />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
