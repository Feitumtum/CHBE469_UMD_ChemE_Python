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
import InstallingPython from "./components/LecturePages/SetupWorkspace/InstallingPython";
import JupyterNotebooks from "./components/LecturePages/SetupWorkspace/JupyterNotebooks";
import PythonMath from "./components/LecturePages/IntroToPython/PythonMath";
import DataStructures from "./components/LecturePages/IntroToPython/DataStructures";
import PythonStatements from "./components/LecturePages/IntroToPython/PythonStatements";

import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Navbar Links */}
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Material Pages */}
          <Route path="/modules/setup-workspace" element={<SetupWorkspace />} />

          <Route
            path="/modules/installing-python"
            element={<InstallingPython />}
          />

          <Route
            path="/modules/jupyter-notebooks"
            element={<JupyterNotebooks />}
          />
          <Route path="/modules/python-math" element={<PythonMath />} />

          <Route
            path="/modules/python-data-structures"
            element={<DataStructures />}
          />
                    <Route
            path="/modules/python-statements"
            element={<PythonStatements />}
          />
        </Routes>
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
