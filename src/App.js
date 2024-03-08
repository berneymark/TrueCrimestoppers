// Library Imports
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Page Imports
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import About from "./pages/about/About.js";
import Founder from "./pages/about/Founder.js";
import Future from "./pages/about/Future.js";
import History from "./pages/about/History.js";

// Component Imports
import Navbar from "./components/Navbar.js";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about/founder"
            element={<Founder />}
          />
          <Route
            path="/about/history"
            element={<History />}
          />
          <Route
            path="/about/future"
            element={<Future />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
