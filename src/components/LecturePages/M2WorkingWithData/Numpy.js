import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function Numpy() {
  const objectives = ["Objective 1:", "Objective 2:", "Objective 3:"];

  const code1 = "";
  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Module 2 - Lec 1: Numpy</h1>
        <div className="title-image-container">
          {/* <img
                src={require("../../../images/python-data-structures.webp")}
                alt="Italian Trulli"
                className="title-image"
                height="350"
              ></img> */}
        </div>
        <div className="objective-container">
          <h3 className="information-container-header">Learning Objectives</h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Introduction</h3>
        <p>
          In this lecture, we will learn about the Numpy Python library. We
          won't use numpy directly very often, but is the foundational block
          that is used to make DataFrames. DataFrames are data structure from
          the Pandas python package we will learn about next (Pandas).
        </p>
        <p>
          There are two main uses of Numpy we will cover
          <ul>
            <li>Numpy Arrays (similar to lists)</li>
            <li>Math</li>
          </ul>
        </p>
        <h3 className="information-container-header">Materials</h3>
        <p>
          <a
            href="https://github.com/Feitumtum/CHBE469-Lecture-Code/blob/main/Module-2/Lec-1-Numpy.ipynb"
            rel="noreferrer"
            target="_blank"
          >
            <p className="lecture-link">
              <i className="fa-brands fa-square-github fa-2xl"></i> Module 2:
              Lec-1-Numpy.ipynb
            </p>
          </a>
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Concept Overview</h3>
        <ol>
          <li>
            If you have experience in Python and want a refresher/review the
            topics, feel free to take a look at some of the code that we went
            over and decide if you would like to go through this lecture
          </li>
          <li>
            For people who just finished watching the video, use this as a
            summary to see if you understand and recall all the examples and
            main concepts
          </li>
        </ol>
        <CodeHighlighter code={code1} language="python"></CodeHighlighter>
      </div>

      <NavFooter backPath="/modules/functions" forwardPath="/modules/pandas" />

      <Footer></Footer>
    </>
  );
}

export default Numpy;
