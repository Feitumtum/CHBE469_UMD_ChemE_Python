import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PythonIntro from "./components/pages/PythonIntro";
import Applications from "./components/pages/Applications";
import AdditionalSkills from "./components/pages/AdditionalSkills";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/python-intro" exact element={<PythonIntro />} />
          <Route path="/applications" exact element={<Applications />} />
          <Route
            path="/additional-skills"
            exact
            element={<AdditionalSkills />}
          />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
