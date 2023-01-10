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
              src={require("../../images/real-python-basics.jpg")}
              text="Introduction to working with data in Python"
              label="Basics"
              path="/python-intro"
            ></CardItems>
            <CardItems
              src={require("../../images/img-2.jpg")}
              text="See how we can apply python in class and industry"
              label="Applications"
              path="/services"
            ></CardItems>
          </ul>
          <ul className="cards__items">
            <CardItems
              src={require("../../images/img-9.jpg")}
              text="See what other data science skills are out there"
              label="Additional Skills"
              path="/services"
            ></CardItems>
            <CardItems
              src={require("../../images/img-9.jpg")}
              text="Introduction to Machine Learning for ChemE's"
              label="Additional Skill"
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
