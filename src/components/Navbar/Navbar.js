import React, { useState, useEffect } from "react";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fa-brands fa-python fa-fw"></i> <b>for ChemE</b>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/how-it-works"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <b>How It Works</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/modules"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <b>Modules</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <b>About Us</b>
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              path="/sign-up"
              buttonType="btn--directional"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
