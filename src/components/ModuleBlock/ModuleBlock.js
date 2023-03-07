import React from "react";
import { Button } from "../Buttons/Button";
import "./ModuleBlock.css";

function ModuleBlock() {
  return (
    <>
      <div className="modules">
        <div className="title-block">
          <i className="fa-brands fa-python"></i>
          <h3>Overall Road Map</h3>
        </div>
        <div className="description-block">
          {/* 1st Section */}
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
        <div>
          <div className="module-block module-block-title">
            Setting Up Your Workspace
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/setup-workspace">
                <i className="fa-solid fa-desktop fa-fw"></i>Visual Studio Code
                (IDE) and Git bash (command line)
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/python-basics">
                <i className="fa-brands fa-python fa-fw"></i>Downloading Python
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/managing-data">
                <i className="fa-solid fa-table fa-fw"></i>Introduction to
                Jupyter Notebooks
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/plotting-basics">
                <i className="fa-solid fa-chart-line fa-fw"></i>Making your
                first line of code
              </Button>
            </div>
          </div>
        </div>

        {/* Block 1 */}
        <div>
          <div className="module-block module-block-title">
            Introduction to Python
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/setup-workspace">
                <i className="fa-solid fa-desktop fa-fw"></i>Review of
                Programming Basics
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/python-basics">
                <i className="fa-brands fa-python fa-fw"></i>Basic Data
                Structures in Python
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/managing-data">
                <i className="fa-solid fa-table fa-fw"></i>Python Statements
                (if, for, while, etc)
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/plotting-basics">
                <i className="fa-solid fa-chart-line fa-fw"></i>Functions in
                Python
              </Button>
            </div>
          </div>
        </div>

        {/* Block 1 */}
        <div>
          <div className="module-block module-block-title">
            Working with Data in Python
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/setup-workspace">
                <i className="fa-solid fa-desktop fa-fw"></i>Basics of Numpy
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/python-basics">
                <i className="fa-brands fa-python fa-fw"></i>Basics of Pandas
                (Dataframes)
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/managing-data">
                <i className="fa-solid fa-table fa-fw"></i>Importing and
                Manipulating Data
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/modules/plotting-basics">
                <i className="fa-solid fa-chart-line fa-fw"></i>Functions in
                Python
              </Button>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div>
          <div className="module-block module-block-title">
            Basics Applications
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-solid fa-chart-pie fa-fw"></i>Statistical
                Analysis for Population
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-solid fa-chart-line fa-fw"></i>Statistical
                Analysis for Trends
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-solid fa-flask fa-fw"></i>Python Examples for
                ChemE Classes
              </Button>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div>
          <div className="module-block module-block-title">
            Applications in ChemE
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>CHBE101: Intro to
                ChemE
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>CHBE301/302:
                Thermodynamics
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>CHBE410: Statistics
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>CHBE442: Heat and
                Mass
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>CHBE437: Unit Ops
                Lab
              </Button>
            </div>
          </div>
        </div>

        {/* Block 4 */}
        <div>
          <div className="module-block module-block-title">
            Additional Tools
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-solid fa-code-branch fa-fw"></i>Git / Version
                Control
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>Querying databases
                / SQL
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i className="fa-brands fa-python fa-fw"></i>Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleBlock;
