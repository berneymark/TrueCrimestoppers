// Library Imports
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Page Imports
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
