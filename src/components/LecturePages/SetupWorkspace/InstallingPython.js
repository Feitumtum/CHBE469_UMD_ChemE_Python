import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";
import NavFooter from "../../NavFooter/NavFooter";

export default function InstallingPython() {
  const objectives = [
    "Objective 1: Install two versions of Python",
    "Objective 2: Understand how to switch between different python versions",
  ];

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Installing Python</h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/python-logo.png")}
            alt="Italian Trulli"
            className="title-image"
            height="350"
          ></img>
        </div>
        <div className="objective-container">
          <h3 className="information-container-header">Learning Objectives</h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      {/* Section 1 */}
      <div className="information-container">
        <h3 className="information-container-header ">Installing Python</h3>
        <p>
          As simple as it sound, installing python comes with more information
          than just clicking download. Python has MANY different version as the
          makers add new changes and functions. As new updates occur, Python
          developers doesn't force or suggest like your computer does to update.
          Tl the different tools are ready to work with a newly released Python.
          Therefore its important for developers to have different versions of
          python installed incase the python modules/tools you want to use
          aren't compatible with newer python versions
        </p>
        <p>
          The main components to a workspace for programming includes a text
          editor and a terminal that helps you interact with your computer
          through the command line. Once we have these components, we will be
          able to develop, run, test, and manage code/projects all in one place.
        </p>
        {/* <CodeHighlighter code={code} language="python" /> */}
      </div>
      <NavFooter
        backPath="/modules/setup-workspace"
        forwardPath="/modules/jupyter-notebooks"
      />
    </>
  );
}
