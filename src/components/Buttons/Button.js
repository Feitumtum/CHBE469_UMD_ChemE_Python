import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = [
  "btn--modules-style",
  "btn--primary",
  "btn--outline",
  "btn--test",
];
const SIZES = ["btn--modules-size", "btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonType,
  buttonStyle,
  buttonSize,
  path,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; // use deafult style if none is given

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={`${path}`}>
      <button
        className={`${buttonType} ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
