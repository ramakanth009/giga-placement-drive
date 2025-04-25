// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Page imports
import Homepage from "./pages/homepage/Homepage";
import Fullstack from "./pages/fullstack/Fullstack";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
import DataScience from "./pages/datascience/DataScience";
import RegistrationForm from './pages/register/RegistrationForm';
import PaymentUnderConstruction from './pages/payment/PaymentUnderConstruction';
import NotFound from './pages/notfound/NotFound';
import CartPage from './components/cart/Cart'; 
import PaymentProcess from './components/payment/PaymentProcess'; // Import the Payment Process component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/payment-under-construction" element={<PaymentUnderConstruction />} />
        
        {/* Redirect for old/alternative routes */}
        <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment-process" element={<PaymentProcess />} />
        
        {/* 404 catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;