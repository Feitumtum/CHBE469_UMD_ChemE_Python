import React from "react";
import "./ModuleBlock.css";
import { Button } from "../Buttons/Button";

function ModuleBlock({ blockData, title }) {
  return (
    <div className="module-block-container">
      <div className="module-block module-block-title">{title}</div>
      <div className="module-block module-block-content">
        {blockData.map(([topic, logo, path], index) => (
          <div className="module-block-topic">
            <Button buttonType="btn--modules" path={path}>
              <i className={logo}></i>
              {topic}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleBlock;
