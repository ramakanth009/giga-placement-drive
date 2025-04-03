// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
import Fullstack from "./pages/fullstack/Fullstack";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/fullstack" element={<Fullstack />} />
          {/* Add other routes here as your application grows */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;