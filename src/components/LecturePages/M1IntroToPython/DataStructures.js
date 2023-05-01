import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function Strings() {
  const objectives = [
    "Objective 1: Understand Strings and how to manipulate them",
    "Objective 2: Understand Lists and how to manipulate them",
    "Objective 3: Understand Sets and how to manipulate them",
    "Objective 4: Understand Dictionaries and how to manipulate them",
  ];

  const code1 = "";
  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Module 1 - Lec 2/3/4: Data Structures in Python
        </h1>
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
          In this lecture, we will introduce four main data structures that are
          used for data collection and storage in Python. While there are lot of
          different uses them, we will only go through some basic examples that
          will be helpful later in data analysis.
        </p>
        <p>
          We go over these data structures and how to use them
          <ul>
            <li>Strings</li>
            <li>Lists</li>
            <li>Sets</li>
            <li>Dictionaries</li>
          </ul>
        </p>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Objective 1</h3>
        <p>
          <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
          Lec-2-Strings-CODE.ipynb
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Objective 2 and 3</h3>
        <p>
          <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
          Lec-3-Lists-and-Sets-CODE.ipynb
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Objective 4</h3>
        <p>
          <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
          Lec-4-Dictionaries-CODE.ipynb
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

      <NavFooter
        backPath="/modules/python-math"
        forwardPath="/modules/python-statements"
      />

      <Footer></Footer>
    </>
  );
}

export default Strings;
