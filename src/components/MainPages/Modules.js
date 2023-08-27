import React from "react";
import ModuleBlock from "../ModuleBlock/ModuleBlock";

export default function Modules() {
  return (
    <>
      <div className="modules">
        <div className="title-block">
          <i className="fa-brands fa-python"></i>
          <h3>Overall Road Map</h3>
        </div>
        <div className="description-block">
          <h1>Introduction</h1>
          <p>
            Outlined below are the main topics/themes we will cover as well as
            the individual skills associated with each topic. The plan for this
            course is that you start by learning the basics an fundamentals of
            python. As you learn new skills, we will show you examples of how
            you can apply them, either in an chemE example, or real life data
            analysis example. Therefore, the philosophy is that while we are
            building a strong fundamental understanding of python, you can see
            its usage right after you learn a skill. As we can't teach you
            everything about python, we hope that this course can teach you new
            skills and encourage you to continue to learn on your own!
          </p>
        </div>

        {/* Block 1 */}
        <ModuleBlock
          title="Module 0: Setting Up Your Workspace"
          blockData={[
            [
              "Visual Studio Code (IDE) and Git bash (command line)",
              "fa-solid fa-desktop fa-fw",
              "/modules/setup-workspace",
            ],
            [
              "Downloading Python",
              "fa-brands fa-python fa-fw",
              "/modules/installing-python",
            ],
            [
              "Introduction to Jupyter Notebooks",
              "fa-solid fa-file-code fa-fw",
              "/modules/jupyter-notebooks",
            ],
          ]}
        />

        {/* Block 2 */}
        <ModuleBlock
          title="Module 1: Introduction to Python"
          blockData={[
            [
              "Math in Python",
              "fa-solid fa-calculator fa-fw",
              "/modules/python-math",
            ],
            [
              "Data Structures in Python",
              "fa-solid fa-cubes fa-fw",
              "/modules/python-data-structures",
            ],
            [
              "Python Statements (if, for, while, etc)",
              "fa-solid fa-scale-balanced fa-fw",
              "/modules/python-statements",
            ],
            [
              "Functions in Python",
              "fa-solid fa-laptop-code fa-fw",
              "/modules/functions",
            ],
          ]}
        />

        {/* Block 3 */}
        <ModuleBlock
          title="Module 2: Working with Data in Python"
          blockData={[
            ["Basics of Numpy", "fa-solid fa-cubes fa-fw", "/modules/numpy"],
            ["Basics of Pandas", "fa-solid fa-table fa-fw", "/modules/pandas"],
            [
              "Importing and Manipulating Data",
              "fa-solid fa-file-excel fa-fw",
              "",
            ],
            ["Plotting in Python", "fa-solid fa-chart-line fa-fw", ""],
          ]}
        />

        {/* Block 4 */}
        <ModuleBlock
          title="Module 3: Applications in ChemE"
          blockData={[
            [
              "CHBE437: Unit Ops Lab (Heat Exchanger)",
              "fa-solid fa-flask fa-fw",
              "/",
            ],
            [
              "CHBE437: Unit Ops Lab (Membrane Separation)",
              "fa-solid fa-flask fa-fw",
              "/",
            ],
          ]}
        />

        {/* Block 5 */}
        {/* <ModuleBlock
          title="Additional Tools"
          blockData={[
            [
              "Git / Version Control",
              "fa-solid fa-code-branch fa-fw",
              "/path/path",
            ],
            [
              "Querying databases / SQL",
              "fa-brands fa-python fa-fw",
              "/path/path",
            ],
            ["Continue Learning", "fa-brands fa-python fa-fw", "/"],
          ]}
        /> */}
      </div>
    </>
  );
}
