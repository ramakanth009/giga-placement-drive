import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import ContactUs from "./pages/contactus/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add other routes here as your application grows */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;