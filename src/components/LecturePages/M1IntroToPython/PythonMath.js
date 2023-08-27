import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function PythonMath() {
  const objectives = [
    "Objective 1: Understand how to do basic math in Python",
    "Objective 2: Know how to access common math variables/constants",
    "Objective 3: Know how to store values into variables",
  ];

  const code1 = `
  # Basic Math 
  1 + 2     # Addition
  10 - 3    # Subtraction
  3 * 2      # Multiplication
  10 / 3    # Division
  2**3       # Power

  # Rounding Numbers
  round(10 / 3, 2)

  # Floor Division (finds max number of times divisible by)
  10 // 3

  # Modulus (finds the remainder)
  10 % 3

  # Common Math Constants
  import math # need to import math module to access typical constants we use.

  math.exp(1)        # function that takes in argument for whats inside the exp()
  math.pi               # variables inside the math module
  math.log10(10)    # other examples of functions
  math.sqrt(4)        # example of square root

  # Variable Assignment
  x = 10        # assigns variable
  y = x + 10   # uses variable for another variable

  # Two ways to add a variable to it self
  x = x + 10
  x += 10
  `;

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Module 1 - Lec 1: Basic Math in Python
        </h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/math-pic.jpg")}
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

      <div className="information-container">
        <h3 className="information-container-header">Introduction</h3>
        <p>
          In this first lecture, we will learn about math in python and how we
          can do basic math and how to access variables typically needed by an
          engineer. For this lecture, please refer to the Jupyter Notebook
          Lectures to follow along with the video
        </p>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Objective 1/2/3</h3>
        <a
          href="https://github.com/Feitumtum/CHBE469-Lecture-Code/blob/main/Module-1/Lec-1-Basic-Math-CODE.ipynb"
          target="_blank"
          rel="noreferrer"
        >
          <p className="lecture-link">
            <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
            Lec-1-Basic-Math-CODE.ipynb
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
        backPath="/modules/jupyter-notebooks"
        forwardPath="/modules/python-data-structures"
      />

      <Footer></Footer>
    </>
  );
}

export default PythonMath;
