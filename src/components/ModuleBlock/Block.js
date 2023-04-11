import React from "react";
import { Button } from "../Buttons/Button";

function ButtonBlock({ blockData, title }) {
  return (
    <>
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
    </>
  );
}

export default ButtonBlock;
