import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function Pandas() {
  const objectives = ["Objective 1:", "Objective 2:", "Objective 3:"];

  const code1 = "";
  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Module 2 - Lec 2: Pandas</h1>
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
          In this lecture, we will learn about the Pandas Python library. The
          most important use of Pandas is the DataFrame data structure. We can
          think of a DataFrame similar to working with the cells in excel. The
          advantage over excel (in my opinion) is that it is much easier to
          group data together and analysis all at once. Pandas also gives us the
          ability to import data from Excels.
        </p>
        <p>
          Advantages of Pandas
          <ul>
            <li>Store all data into one data structure</li>
            <li>Analysis all data all at once</li>
            <li>Complete complicated analysis easier using functions</li>
          </ul>
        </p>
        <h3 className="information-container-header">Materials</h3>
        <p>
          <a
            href="https://github.com/Feitumtum/CHBE469-Lecture-Code/blob/main/Module-2/Lec-2-Pandas.ipynb"
            rel="noreferrer"
            target="_blank"
          >
            <p className="lecture-link">
              <i className="fa-brands fa-square-github fa-2xl"></i> Module 2:
              Lec-2-Pandas.ipynb
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

      <NavFooter backPath="/modules/numpy" forwardPath="" />

      <Footer></Footer>
    </>
  );
}

export default Pandas;
