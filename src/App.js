import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Register from "./pages/Register";
import DiscoverTalents from "./pages/DiscoverTalents";
import HireATalent from "./components/hire-a-talent/HireATalent";
import { generalRoute } from "./Data/generalRoutes";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={generalRoute.home} element={<Home />} />
        <Route path={generalRoute.becomeATalent} element={<Register />} />
        <Route path={generalRoute.discoverTalents} element={<DiscoverTalents />} />
        <Route path={generalRoute.hireATalent} element={<HireATalent />} />
      </Routes>
    </Router>
  );
}

export default App;

// Google sheet form API
// https://script.google.com/macros/s/AKfycbzr4yc_oEi0ouvxlPb7wpgcCLNwoKQ1CJX_MWZjU3ha5dkVCZippxYz0VILnonTyotVow/exec
