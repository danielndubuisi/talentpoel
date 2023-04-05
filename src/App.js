import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

// Google sheet form API
// https://script.google.com/macros/s/AKfycbzr4yc_oEi0ouvxlPb7wpgcCLNwoKQ1CJX_MWZjU3ha5dkVCZippxYz0VILnonTyotVow/exec
