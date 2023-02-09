import React from "react";
import "./Gallery.css";
import background from "../../images/real-python-basics.jpg";

function Gallery() {
  return (
    <div class="kodfun-galeri-base">
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        Examples of what you'll do!
      </div>
      <div class="kodfun-galeri">
        <div style={{ backgroundImage: `url(${background})` }}></div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
      </div>
    </div>
  );
}

export default Gallery;
