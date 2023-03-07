import React from "react";
import Checklist from "../../LectureMaterial/Checklist";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

export default function PythonBasics() {
  const objectives = [
    "Objective 1: Install two versions of Python",
    "Objective 2: Pip install Jupyter Notebooks",
    "Objective 3: Understand how to switch between different python versions",
    "Objective 4: Write your first line of code in Jupyter Notebooks",
  ];

  const code = `
      def function(a, b):
          return a + b
            `;

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Introduction to Working With Python in Vscode
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
          <h3 className="headers">
            <u>Learning Objectives</u>
          </h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      {/* Section 1 */}
      <div className="information-container">
        <h3 className="information-container-header ">Installing Python</h3>
        <br></br>
        <p className="information-container-content">
          As simple as it sound, installing python comes with more information
          than just clicking download. Python has MANY different version as the
          makers add new changes and functions. As new updates occur, Python
          developers doesn't force or suggest like your computer does to update.
          Tl the different tools are ready to work with a newly released Python.
          Therefore its important for developers to have different versions of
          python installed incase the python modules/tools you want to use
          aren't compatible with newer python versions
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
