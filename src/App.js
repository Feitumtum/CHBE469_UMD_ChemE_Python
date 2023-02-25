import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import HowItWorks from "./components/pages/HowItWorks";
import Modules from "./components/pages/Modules";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";

// Imports for lecture pages
import SetupWorkspace from "./components/LecturePages/IntroToPython/SetupWorkspace";
import PythonBasics from "./components/LecturePages/IntroToPython/PythonBasics";
import ManagingData from "./components/LecturePages/IntroToPython/ManagingData";
import PlottingBasics from "./components/LecturePages/IntroToPython/PlottingBasics";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Navbar Links */}
          <Route path="/UMD-ChemE-Python" exact element={<Home />} />
          <Route
            path="/UMD-ChemE-Python/how-it-works"
            exact
            element={<HowItWorks />}
          />
          <Route path="/UMD-ChemE-Python/modules" exact element={<Modules />} />
          <Route
            path="/UMD-ChemE-Python/about-us"
            exact
            element={<AboutUs />}
          />
          <Route path="/UMD-ChemE-Python/sign-up" exact element={<SignUp />} />

          {/* Material Pages */}
          <Route
            path="/UMD-ChemE-Python/modules/setup-workspace"
            exact
            element={<SetupWorkspace />}
          />
          <Route
            path="/UMD-ChemE-Python/modules/python-basics"
            exact
            element={<PythonBasics />}
          />
          <Route
            path="/UMD-ChemE-Python/modules/managing-data"
            exact
            element={<ManagingData />}
          />
          <Route
            path="/UMD-ChemE-Python/modules/plotting-basics"
            exact
            element={<PlottingBasics />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
