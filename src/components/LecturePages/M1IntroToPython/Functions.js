import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function Functions() {
  const objectives = [
    "Objective 1: Understand and know how to make self-defined functions",
  ];

  const code1 = "";
  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Module 1 - Lec 6: Functions</h1>
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
          In this lecture, we will learn how to make self-defined functions in
          Python. Similar to MATLAB, Mathcad, or any other programming langugae,
          we often want to create a self-defined function to help abstract our
          code. If we are going to use the same code more than 2 times, it is
          usually worth it to make a function for it.
        </p>
        <p>
          A simple example of a function that doesn't feel like a function is a
          mathematical function. Imagine we have f(x) = 2x^2 + x - 1. We can
          define function named f and takes in the input x. Then whenever we
          call f(x), 2x^2 + x - 1 will be calculated.
        </p>
        <p>
          For data analysis
          <ol>
            <li>Plotting</li>
            <ul>
              <li>
                We often want to create multiple plots for data that has
                multiple parameters. Therefore, its easier to define a plotting
                function so we can make 5-10 plots all with one function. This
                helps ensure each graph has similar formatting.
              </li>
            </ul>
            <li>Analysis</li>
            <ul>
              <li>
                For data aggregation and calculations, its easier to create a
                function that does the analysis so that we can apply it either
                group by group or row by row on a DataFrame.
              </li>
            </ul>
          </ol>
        </p>
        <h3 className="information-container-header">Materials</h3>
        <a
          href="https://github.com/Feitumtum/CHBE469-Lecture-Code/blob/main/Module-1/Lec-6-Functions-CODE.ipynb"
          rel="noreferrer"
          target="_blank"
        >
          <p className="lecture-link">
            <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
            Lec-6-Functions-CODE.ipynb
          </p>
        </a>
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

      <NavFooter
        backPath="/modules/python-statements"
        forwardPath="/modules/numpy"
      />

      <Footer></Footer>
    </>
  );
}

export default Functions;
