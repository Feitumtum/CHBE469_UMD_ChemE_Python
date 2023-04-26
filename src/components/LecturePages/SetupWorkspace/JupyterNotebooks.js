import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";

export default function JupyterNotebooks() {
  const objectives = [
    "Objective 1: Understand why we use jupyter notebooks",
    "Objective 2: Download the jupyter notebook extension in vscode",
    "Objective 3: Understand how to open a folder and jupyter notebooks in vscode",
    "Objective 4: Understand how to switch between different python versions",
    "Objective 5: Write your first line of code in Jupyter Notebooks",
  ];

  const KN1 = [
    "Task 1: You are able to open vscode with in a specific folder / working directory",
    "Task 2: You are able to make a new jupyter notebook file",
  ];

  const KN2 = [
    "Task 1: You are able to install ipykernal if prompted",
    "Task 2: You are able switch between different python versions in the jupyter notebook file",
  ];

  const KN3 = [
    "Task 1: You understand the difference between Code and Markdown Cells",
    "Task 2: You know how to tell the order cells are run and how running a cell above doesn't override the cells below it",
    "Task 3: You know how to clear outputs and restart the python kernel",
    "Task 4: You know how to check what the current values of variables are",
  ];

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Working With Jupyter Notebooks in Vscode
        </h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/jupyter_logo.png")}
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
        <h3 className="information-container-header">
          Objective 1: Introduction to Jupyter Notebooks
        </h3>
        <p>
          If you are trying to learn the skills to become a better data analyst,
          you will want to be familiar with Jupyter Notebooks. The advantage of
          Jupyter Notebook is that it allows you to selectively run and modify
          parts of your code easily, without needing to run the program in its
          entirety.
        </p>
        <p>There are 4 main steps to analysis data</p>
        <ol style={{ paddingLeft: "25px", paddingBottom: "25px" }}>
          <li>Import the Data (from various sources)</li>
          <li>Process the Data (choose what we want to look at)</li>
          <li>Analyze the Data (aggregate the data)</li>
          <li>Plot the Data</li>
        </ol>
        <p>
          In traditional coding, you usually program an entire file and then run
          it to accomplish a task. However, as a data analyst, you might not
          know what you want to plot or what to do with the data yet. Therefore,
          we don't want to have to import and re-process the data every time we
          make a change to the plots. Often times, we will do each process above
          in order and the final analysis evolves as we look at the data.
        </p>
      </div>

      {/* Section 2 */}
      <div className="information-container">
        <h3 className="information-container-header">
          Objective 2: Download the jupyter notebook extension
        </h3>
        <p>
          Open your vscode and go to the extension tab. Search for "Jupyter" and
          click "Install". Once you download it, you most likely have to restart
          your vscode (close and reopen).
        </p>
        <img
          src={require("../../../images/jupyter-extension-1.png")}
          alt="Italian Trulli"
          width="75%"
          className="sample-images"
        ></img>
        <p>
          To ensure you have downloaded the extension, the "Install" button
          should be gone and changed to a "Disable" and "Uninstall" buttons.
        </p>
        <img
          src={require("../../../images/downloaded-jupyter-extension.png")}
          alt="Italian Trulli"
          width="50%"
          className="sample-images"
        ></img>
      </div>

      {/* Section 3 */}
      <div className="information-container">
        <h3 className="information-container-header">
          Objective 3: Learn how to make your first jupyter notebook file
        </h3>
        <p>
          There are various different ways you can start working with files in
          vscode. Follow the video below for a quick run down of how to either
          open a file or a folder in vscode.
        </p>
        <p>
          <i>
            <b>
              (Note: The first two parts of the video are related to Objective
              3, but part 3 of the video includes information about objective 4)
            </b>
          </i>
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
        ></iframe>
        <h3 className="information-container-header">Recap</h3>
        <p>We can create a jupyter notebook file in one of two ways:</p>
        <h3 className="information-container-header">Option 1</h3>
        <ol style={{ paddingLeft: "25px", paddingBottom: "25px" }}>
          <li>
            Pull up the Command Pallette with the shortcut "Ctrl + Shift + P"
          </li>
          <li>Search for "new jupyter notebook"</li>
          <li>Save the file</li>
        </ol>
        <h3 className="information-container-header">Option 2</h3>
        <ol style={{ paddingLeft: "25px", paddingBottom: "25px" }}>
          <li>Right Click in Files Tab</li>
          <li>Click "New File"</li>
          <li>Name the file with a ".ipynb" extension</li>
        </ol>
        <h3 className="information-container-header">Knowledge Check</h3>
        <Checklist objectives={KN1}></Checklist>
      </div>

      {/* Section 4 */}
      <div className="information-container">
        <h3 className="information-container-header">
          Objective 4: Switch between different python versions
        </h3>
        <p>
          First, we want to understand what does it mean to switch between
          python version. If you followed the previous module of python
          installation, we purposely installed multiple versions of python. When
          we use jupyter notebooks, we will have to choose a specific python
          kernel (version) to use when we run the code.
        </p>
        <p>
          When working with python, there are multiple libraries that we can
          install and use so that we don't have to code it ourselves. Therefore,
          when we install different libraries, we are gaining access to
          different functions we can use within our code.
        </p>
        <p>
          The reason we need different python versions is because that libraries
          are not programmed by the people who manage the different python
          versions. Therefore, libraries that are not updated alongside the new
          python versions, will run into errors when you used with a newer
          python versions. Most of the time, people will not change to new
          python versions when they first come out, and commonly transition to
          higher python versions when specific functions in libraries or python
          get deprecated (no longer supported or maintained by its developer)
        </p>
        <p>
          As there different ways to open a jupyter notebook file, please refer
          to this video for the different steps
        </p>
        <p>
          <i>
            <b>
              (Note: Only the last part of this video is related to switching
              between python versions)
            </b>
          </i>
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
        ></iframe>
        <h3 className="information-container-header">Knowledge Check</h3>
        <Checklist objectives={KN2}></Checklist>
      </div>

      {/* Section 5 */}
      <div className="information-container">
        <h3 className="information-container-header">
          Objective 5: Write your first line of code in Jupyter Notebooks
        </h3>
        <p>
          In this section, we will learn about the basics of how jupyter
          notebooks works. Jupyter Notebooks's main difference from regular
          programming is the way and order it runs the code. If you have other
          programming experience, all lines in the file run in order and all
          together. Therefore, code in a file will all run if you run the file.
          In Jupyter Notebooks, you run different cells of code. You can run
          cells one at a time, or all together. The idea that we can code and
          then see the result is important for data science. Many times we want
          to see what our code does before deciding if we want to move forward.
        </p>
        <p>
          For a few basic examples of how code works in Jupyter Notebooks,
          follow the video below to learn how to write your first few lines of
          code.
        </p>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/xJSXs-G9iO8"
        ></iframe>
        <h3 className="information-container-header">Knowledge Check</h3>
        <Checklist objectives={KN3}></Checklist>
      </div>
      <NavFooter
        backPath="/modules/setup-workspace"
        forwardPath="/modules/python-math"
      />
      <Footer></Footer>
    </>
  );
}
