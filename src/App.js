import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HowItWorks from "./components/pages/HowItWorks";
import Modules from "./components/pages/Modules";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";

// Imports for lecture pages
import SetupWorkspace from "./components/LecturePages/SetupWorkspace/SetupWorkspace";
import PythonBasics from "./components/LecturePages/SetupWorkspace/PythonBasics";
import JupyterNotebooks from "./components/LecturePages/SetupWorkspace/JupyterNotebooks";

import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Navbar Links */}
          <Route path="/" exact element={<Home />} />
          <Route path="/how-it-works" exact element={<HowItWorks />} />
          <Route path="/modules" exact element={<Modules />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/sign-up" exact element={<SignUp />} />

          {/* Material Pages */}
          <Route
            path="/modules/setup-workspace"
            exact
            element={<SetupWorkspace />}
          />
          <Route
            path="/modules/python-basics"
            exact
            element={<PythonBasics />}
          />
          <Route
            path="/modules/jupyter-notebooks"
            exact
            element={<JupyterNotebooks />}
          />
        </Routes>
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
