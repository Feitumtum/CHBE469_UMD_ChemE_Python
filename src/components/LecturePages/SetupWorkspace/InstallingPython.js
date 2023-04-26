import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
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

        <p>
          To download python, go to Python downloads page
          <a
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            HERE
          </a>
        </p>
        <p>
          We will be downloading each of these Python versions
          <ul>
            <li>3.10</li>
            <li>3.9</li>
            <li>3.8</li>
            <li>3.7 (Optional)</li>
          </ul>
        </p>
        <p>
          On the downloads page, there should be a list of releases. While this
          might be overwhelming, for each Python version (3.8, 3.9, etc), pick
          the version with the highest 3rd number. (3.10.10 > 3.10.5)
        </p>
        <img
          src={require("../../../images/python-versions.png")}
          alt="Italian Trulli"
          height="350"
          className="sample-images"
        ></img>

        <p>
          After clicking on the downloaded file, go through the installation
          until you reach this screen
        </p>
        <img
          src={require("../../../images/install-python.jpg")}
          alt="Italian Trulli"
          height="350"
          className="sample-images"
        ></img>
        <p>
          It's important to note that you should{" "}
          <b style={{ color: "red" }}>
            only ADD TO PATH for the Python version you want as your default
            python version
          </b>
          . Meaning, if you were to open a terminal and start using python
          without specifying which version you wanted to use, this will be the
          default version.
        </p>
        <p>
          Therefore, I suggest you install Python version 3.7 first and install
          up until version 3.10. Then when installing Python version 3.9, check
          the box for ADD Python 3.9 to PATH
        </p>
        <p>
          As of right now (4/26/2023), Python 3.9 is still in the middle of its
          intended usage timeline. Therefore, older versions like 3.7 and 3.8
          are heading towards end of life, and newer version like 3.10 might not
          be compatible with older python libraries yet.
        </p>
        <img
          src={require("../../../images/python-release-status.png")}
          alt="Italian Trulli"
          height="350"
          className="sample-images"
        ></img>
        <a href="https://devguide.python.org/versions/#python-release-cycle">
          <i style={{ color: "gray" }}>
            Source: https://devguide.python.org/versions/#python-release-cycle
          </i>
        </a>
      </div>
      <NavFooter
        backPath="/modules/setup-workspace"
        forwardPath="/modules/jupyter-notebooks"
      />
    </>
  );
}
