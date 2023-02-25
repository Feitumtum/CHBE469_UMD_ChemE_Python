import React from "react";
import Checklist from "../../LectureMaterial/Checklist";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

export default function PythonBasics() {
  const objectives = [
    "Download and install an IDE (vscode)",
    "Configuring your vscode with your first extension and change color theme",
    "Download and install terminal GUI (git bash)",
  ];

  const code = `
  function sayHello(name) {
    console.log('Hello, ' + name + '!');
  }
  sayHello('World');
`;

  return (
    <>
      <div>
        <h1 className="python-basics">python-basics</h1>
        <div className="title-image-container">
          {/* <img
            src={require("../../../images/workspace.jpg")}
            alt="Italian Trulli"
            className="title-image"
            width="450"
            height="350"
          ></img> */}
        </div>
        <div className="objective-container">
          <h3 className="headers">
            <u>Objectives</u>
          </h3>
          <Checklist objectives={objectives} />
        </div>
        <CodeHighlighter code={code} />
      </div>
    </>
  );
}
