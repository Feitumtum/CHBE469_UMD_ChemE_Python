import React from "react";
import "../../App.css";
import { Button } from "../Buttons/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      {/* <video src="/videos/data-analysis-intro.mp4" autoPlay loop muted /> */}
      <h1>JUMPSTART YOUR DATA SCIENCE JOURNEY</h1>
      <p>Data science for engineers made by an engineer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
