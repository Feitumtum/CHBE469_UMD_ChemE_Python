import React from "react";
import "./Checklist.css";

function Checklist(props) {
  const objectives = props.objectives;
  const listItems = objectives.map((objectives) => (
    <li key={objectives}>
      <label className="checkbox-label">
        <input type="checkbox" className="checkbox-input" />
        <span className="checkbox-box"></span>
        <span className="checkbox-text">{objectives}</span>
      </label>
    </li>
  ));
  return (
    <div className="checklist-container">
      <ul className="checklist">{listItems}</ul>
    </div>
  );
}

export default Checklist;
