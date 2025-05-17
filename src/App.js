// import React from "react";
// import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

// // Page imports
// import Homepage from "./pages/homepage/Homepage";
// import Fullstack from "./pages/fullstack/Fullstack";
// import ContactUs from "./pages/contactus/ContactUs";
// import AboutUs from "./pages/aboutus/AboutUs";
// import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
// import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
// import DataScience from "./pages/datascience/DataScience";
// import RegistrationForm from './pages/register/RegistrationForm';
// import PaymentUnderConstruction from './pages/payment/PaymentUnderConstruction';
// import NotFound from './pages/notfound/NotFound';
// import CartPage from './components/cart/Cart'; 
// import PaymentProcess from './components/payment/PaymentProcess'; // Import the Payment Process component
// import FullstackFulltime from './pages/full_time/FullstackFulltime';
// import DatascienceFulltime from './pages/full_time/DatascienceFulltime';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Main routes */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/fullstack" element={<Fullstack />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/datascience" element={<DataScience />} />
//         <Route path="/register" element={<RegistrationForm />} />
//         <Route path="/payment-under-construction" element={<PaymentUnderConstruction />} />
        
//         {/* New Full-Time Program routes */}
//         <Route path="/fulltime/fullstack" element={<FullstackFulltime />} />
//         <Route path="/fulltime/datascience" element={<DatascienceFulltime />} />
        
//         {/* Redirect for old/alternative routes */}
//         <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
//         <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/payment-process" element={<PaymentProcess />} />
        
//         {/* 404 catch-all route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Lazy loaded components
const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
const Fullstack = React.lazy(() => import("./pages/fullstack/Fullstack"));
const ContactUs = React.lazy(() => import("./pages/contactus/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/aboutus/AboutUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacypolicy/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./pages/termsandconditions/TermsAndConditions"));
const DataScience = React.lazy(() => import("./pages/datascience/DataScience"));
const RegistrationForm = React.lazy(() => import('./pages/register/RegistrationForm'));
const PaymentUnderConstruction = React.lazy(() => import('./pages/payment/PaymentUnderConstruction'));
const NotFound = React.lazy(() => import('./pages/notfound/NotFound'));
const CartPage = React.lazy(() => import('./components/cart/Cart'));
const PaymentProcess = React.lazy(() => import('./components/payment/PaymentProcess'));
const FullstackFulltime = React.lazy(() => import('./pages/full_time/FullstackFulltime'));
const DatascienceFulltime = React.lazy(() => import('./pages/full_time/DatascienceFulltime'));
const PaymentComplete = React.lazy(() => import('./components/cart/PaymentComplete'));

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
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
          
          {/* New Full-Time Program routes */}
          <Route path="/fulltime/fullstack" element={<FullstackFulltime />} />
          <Route path="/fulltime/datascience" element={<DatascienceFulltime />} />
          
          {/* Redirect for old/alternative routes */}
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment-process" element={<PaymentProcess />} />
          <Route path="/payment-complete" element={<PaymentComplete />} />
          
          {/* 404 catch-all route */} 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;