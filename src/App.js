import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";

// Lazy loaded components
const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
const Fullstack = React.lazy(() => import("./pages/fullstack/Fullstack"));
const ContactUs = React.lazy(() => import("./pages/contactus/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/aboutus/AboutUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacypolicy/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./pages/termsandconditions/TermsAndConditions"));
const DataScience = React.lazy(() => import("./pages/datascience/DataScience"));
const RegistrationForm = React.lazy(() => import('./pages/register/RegistrationForm'));
const NotFound = React.lazy(() => import('./pages/notfound/NotFound'));
const CartPage = React.lazy(() => import('./pages/cart/Cart'));
const FullstackFulltime = React.lazy(() => import('./pages/full_time/FullstackFulltime'));
const DatascienceFulltime = React.lazy(() => import('./pages/full_time/DatascienceFulltime'));
const PaymentComplete = React.lazy(() => import('./pages/cart/PaymentComplete'));
const Blog = React.lazy(() => import('./pages/blog/Blog'));
const BlogDetailPage = React.lazy(() => import('./components/blog/blogdetail/BlogDetailPage'));
const CampusPage = React.lazy(() => import('./pages/campus/CampusPage'));
const PreScreeningTest = React.lazy(() => import('./components/homepagecomponets/prescreeningtest/PreScreeningTest'));
const SitemapPage = React.lazy(() => import('./pages/sitemap/SitemapPage')); // NEW SITEMAP PAGE

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} /> 
          <Route path="/campus" element={<CampusPage />} />
          
          {/* New Full-Time Program routes */}
          <Route path="/fulltime/fullstack" element={<FullstackFulltime />} />
          <Route path="/fulltime/datascience" element={<DatascienceFulltime />} />
          
          {/* Redirect for old/alternative routes */}
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          
          {/* Commerce routes - These might be hidden from main navigation */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment-complete" element={<PaymentComplete />} />

          {/* Assessment route */}
          <Route path="/pre-screening-test" element={<PreScreeningTest />} />
          
          {/* NEW SITEMAP ROUTE */}
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* 404 catch-all route */} 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/common/navbar/Navbar";
// import Footer from "./components/common/footer/Footer";

// // Lazy loaded components
// const Homepage = React.lazy(() => import("./pages/homepage/Homepage"));
// const Fullstack = React.lazy(() => import("./pages/fullstack/Fullstack"));
// const ContactUs = React.lazy(() => import("./pages/contactus/ContactUs"));
// const AboutUs = React.lazy(() => import("./pages/aboutus/AboutUs"));
// const PrivacyPolicy = React.lazy(() => import("./pages/privacypolicy/PrivacyPolicy"));
// const TermsAndConditions = React.lazy(() => import("./pages/termsandconditions/TermsAndConditions"));
// const DataScience = React.lazy(() => import("./pages/datascience/DataScience"));
// const RegistrationForm = React.lazy(() => import('./pages/register/RegistrationForm'));
// const NotFound = React.lazy(() => import('./pages/notfound/NotFound'));
// const CartPage = React.lazy(() => import('./pages/cart/Cart'));
// const FullstackFulltime = React.lazy(() => import('./pages/full_time/FullstackFulltime'));
// const DatascienceFulltime = React.lazy(() => import('./pages/full_time/DatascienceFulltime'));
// const PaymentComplete = React.lazy(() => import('./pages/cart/PaymentComplete'));
// const Blog = React.lazy(() => import('./pages/blog/Blog'));
// const BlogDetailPage = React.lazy(() => import('./components/blog/blogdetail/BlogDetailPage'));
// const CampusPage = React.lazy(() => import('./pages/campus/CampusPage'));
// const PreScreeningTest = React.lazy(() => import('./components/homepagecomponets/prescreeningtest/PreScreeningTest'));
// const SitemapPage = React.lazy(() => import('./pages/sitemap/SitemapPage'));

// const LoadingSpinner = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     Loading...
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes>
//           {/* Main routes */}
//           <Route path="/" element={<Homepage />} />
//           <Route path="/fullstack" element={<Fullstack />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//           <Route path="/datascience" element={<DataScience />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetailPage />} /> 
//           <Route path="/campus" element={<CampusPage />} />
          
//           {/* New Full-Time Program routes */}
//           <Route path="/fulltime/fullstack" element={<FullstackFulltime />} />
//           <Route path="/fulltime/datascience" element={<DatascienceFulltime />} />
          
//           {/* Redirect for old/alternative routes */}
//           <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
//           <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          
//           {/* Commerce routes - These might be hidden from main navigation */}
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/payment-complete" element={<PaymentComplete />} />

//           {/* Assessment route */}
//           <Route path="/pre-screening-test" element={<PreScreeningTest />} />
          
//           {/* Sitemap route */}
//           <Route path="/sitemap" element={<SitemapPage />} />
          
//           {/* 404 catch-all route */} 
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//       <Footer />
//     </Router>
//   );
// };

// export default App;