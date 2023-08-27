import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/MainPages/Home";
import HowItWorks from "./components/MainPages/HowItWorks";
import Modules from "./components/MainPages/Modules";
import AboutUs from "./components/MainPages/AboutUs";
import SignUp from "./components/MainPages/SignUp";

// Imports for lecture pages
// Module 0
import SetupWorkspace from "./components/LecturePages/M0SetupWorkspace/SetupWorkspace";
import InstallingPython from "./components/LecturePages/M0SetupWorkspace/InstallingPython";
import JupyterNotebooks from "./components/LecturePages/M0SetupWorkspace/JupyterNotebooks";

// Module 1
import PythonMath from "./components/LecturePages/M1IntroToPython/PythonMath";
import DataStructures from "./components/LecturePages/M1IntroToPython/DataStructures";
import PythonStatements from "./components/LecturePages/M1IntroToPython/PythonStatements";
import Functions from "./components/LecturePages/M1IntroToPython/Functions";

// Module 2
import Numpy from "./components/LecturePages/M2WorkingWithData/Numpy";
import Pandas from "./components/LecturePages/M2WorkingWithData/Pandas";

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
          {/* Module 0 */}
          <Route path="/modules/setup-workspace" element={<SetupWorkspace />} />
          <Route
            path="/modules/installing-python"
            element={<InstallingPython />}
          />
          <Route
            path="/modules/jupyter-notebooks"
            element={<JupyterNotebooks />}
          />
          {/* Module 1 */}
          <Route path="/modules/python-math" element={<PythonMath />} />
          <Route
            path="/modules/python-data-structures"
            element={<DataStructures />}
          />
          <Route
            path="/modules/python-statements"
            element={<PythonStatements />}
          />
          <Route path="/modules/functions" element={<Functions />} />

          {/* Module 2 */}
          <Route path="/modules/numpy" element={<Numpy />} />
          <Route path="/modules/pandas" element={<Pandas />} />
        </Routes>
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
