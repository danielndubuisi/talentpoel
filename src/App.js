import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Register from "./pages/Register";
import DiscoverTalents from "./pages/DiscoverTalents";
import { generalRoute } from "./Data/generalRoutes";
import HireaTalent from "./pages/HireaTalent";

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={generalRoute.home} element={<Home />} />
          <Route path={generalRoute.becomeATalent} element={<Register />} />
          <Route
            path={generalRoute.discoverTalents}
            element={<DiscoverTalents />}
          />
          <Route path={generalRoute.hireATalent} element={<HireaTalent />} />
        </Routes>
      </Router>
  );
}

export default App;