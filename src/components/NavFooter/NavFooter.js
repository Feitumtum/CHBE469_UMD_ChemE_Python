import React from "react";
import "./NavFooter.css";
import { Button } from "../Buttons/Button";

function NavFooter({ backPath, forwardPath }) {
  return (
    <div className="nav-footer">
      <div>
        <Button buttonType="btn--nav-footer" path={backPath}>
          <span>&#8592;</span> Back
        </Button>
      </div>
      <div className="push-right">
        <Button buttonType="btn--nav-footer" path={forwardPath}>
          Forward <span>&#8594;</span>
        </Button>
      </div>
    </div>
  );
}

export default NavFooter;
