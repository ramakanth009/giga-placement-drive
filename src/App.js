// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Correct the import paths and case sensitivity
import Homepage from "./pages/homepage/Homepage";
import Fullstack from "./pages/fullstack/Fullstack";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
import DataScience from "./pages/datascience/DataScience";
import RegistrationForm from './pages/register/RegistrationForm';
import PaymentUnderConstruction from './pages/payment/PaymentUnderConstruction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/payment-under-construction" element={<PaymentUnderConstruction />} />
      </Routes>
    </Router>
  );
};

export default App;