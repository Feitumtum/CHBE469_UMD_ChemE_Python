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
          title="Setting Up Your Workspace"
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
              "fa-solid fa-table fa-fw",
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
              "fa-brands fa-python fa-fw",
              "/modules/python-math",
            ],
            [
              "Data Structures in Python",
              "fa-brands fa-python fa-fw",
              "/modules/python-basics",
            ],
            [
              "Python Statements (if, for, while, etc)",
              "fa-solid fa-table fa-fw",
              "/modules/managing-data",
            ],
            [
              "Functions in Python",
              "fa-solid fa-chart-line fa-fw",
              "/modules/plotting-basics",
            ],
          ]}
        />

        {/* Block 3 */}
        <ModuleBlock
          title="Working with Data in Python"
          blockData={[
            [
              "Basics of Numpy",
              "fa-solid fa-desktop fa-fw",
              "/modules/setup-workspace",
            ],
            [
              "Basics of Pandas (Dataframes)",
              "fa-brands fa-python fa-fw",
              "/modules/python-basics",
            ],
            [
              "Importing and Manipulating Data",
              "fa-solid fa-table fa-fw",
              "/modules/managing-data",
            ],
            [
              "Functions in Python",
              "fa-solid fa-chart-line fa-fw",
              "/modules/plotting-basics",
            ],
          ]}
        />

        {/* Block 4 */}
        <ModuleBlock
          title="Basics Applications"
          blockData={[
            [
              "Statistical Analysis for Population",
              "fa-solid fa-chart-line fa-fw",
              "/path/path",
            ],
            ["Statistical Analysis for Trends", "fa-solid fa-table fa-fw", "/"],
            [
              "Python Examples for ChemE Classes",
              "fa-solid fa-flask fa-fw",
              "/",
            ],
          ]}
        />

        {/* Block 5 */}
        <ModuleBlock
          title="Applications in ChemE"
          blockData={[
            [
              "CHBE101: Intro to ChemE",
              "fa-solid fa-chart-pie fa-fw",
              "/path/path",
            ],
            [
              "CHBE301/302:Thermodynamics",
              "fa-solid fa-chart-line fa-fw",
              "/path/path",
            ],
            ["CHBE410: Statistics", "fa-solid fa-table fa-fw", "/"],
            ["CHBE442: Heat and Mass", "fa-solid fa-flask fa-fw", "/"],
            ["CHBE437: Unit Ops Lab", "fa-solid fa-flask fa-fw", "/"],
          ]}
        />

        {/* Block 6 */}
        <ModuleBlock
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
        />
      </div>
    </>
  );
}
