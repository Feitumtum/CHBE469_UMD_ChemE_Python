import React from "react";
import "../../App.css";
import HeroSection from "../HomePage/HeroSection";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
