import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";
// import image9 from "./public"

function Cards() {
  return (
    <div className="cards">
      <h1>What you need to know to get started!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={require("../images/real-python-basics.jpg")}
              text="Explore the hidden waterfall"
              label="Basics"
              path="/python-intro"
            ></CardItems>
            <CardItems
              src={require("../images/img-2.jpg")}
              text="Travel to ISLAND"
              label="Luxury"
              path="/services"
            ></CardItems>
            <CardItems
              src={require("../images/img-9.jpg")}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            ></CardItems>
          </ul>
          {/* <ul className="cards__items">ENTER MORE HERE</ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
