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
      def function(a, b):
          return a + b
            `;

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Introduction to Python Jupyter Notebooks
        </h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/Jupyter_logo.svg.png")}
            alt="Italian Trulli"
            className="title-image"
            height="350"
          ></img>
        </div>
        <div className="objective-container">
          <Checklist objectives={objectives} />
        </div>
      </div>

      {/* Section 1 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Components of a Workspace
        </h3>
        <br></br>
        <p className="information-container-content">
          Similar to how you have a desk setup with a computer, mouse pad,
          pencil holder, drawers, etc, a programming also needs a workspace that
          has all the tools they need to code. One of the most important parts
          of learning to programming is having not only having an environment
          that has all the tools needed to not only help you get start but also
          to allow you to grow.
        </p>
        <br></br>
        <p className="information-container-content">
          The main components to a workspace for programming includes a text
          editor and a terminal that helps you interact with your computer
          through the command line. Once we have these components, we will be
          able to develop, run, test, and manage code/projects all in one place.
        </p>
        <br></br>
        <CodeHighlighter code={code} language="python" />
      </div>
    </>
  );
}
