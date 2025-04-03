import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataScience from "./pages/datascience/DataScience";
import FullStack from "./pages/fullstack/FullStack";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/datascience" element={<DataScience />} />
        
      </Routes>
    </Router>
  );
};

export default App;