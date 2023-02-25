import React from "react";
import { Button } from "../Buttons/Button";
import "./ModuleBlock.css";

function ModuleBlock() {
  return (
    <>
      <div className="modules">
        <div className="title-block">
          <i class="fa-brands fa-python"></i>
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
            Introduction to Python
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button
                buttonType="btn--modules"
                path="/UMD-ChemE-Python/modules/setup-workspace"
              >
                <i class="fa-solid fa-desktop fa-fw"></i>Setting up your
                workspace
              </Button>
            </div>
            <div className="module-block-topic">
              <Button
                buttonType="btn--modules"
                path="/UMD-ChemE-Python/modules/python-basics"
              >
                <i class="fa-brands fa-python fa-fw"></i>Python basics using
                Jupter Notebooks
              </Button>
            </div>
            <div className="module-block-topic">
              <Button
                buttonType="btn--modules"
                path="/UMD-ChemE-Python/modules/managing-data"
              >
                <i class="fa-solid fa-table fa-fw"></i>Managing data in Python
                (Numpy and Pandas)
              </Button>
            </div>
            <div className="module-block-topic">
              <Button
                buttonType="btn--modules"
                path="/UMD-ChemE-Python/modules/plotting-basics"
              >
                <i class="fa-solid fa-chart-line fa-fw"></i>Plotting basics in
                Python (Matplotlib and Seasborn)
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
                <i class="fa-solid fa-chart-pie fa-fw"></i>Statistical Analysis
                for Population
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-solid fa-chart-line fa-fw"></i>Statistical Analysis
                for Trends
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-solid fa-flask fa-fw"></i>Python Examples for ChemE
                Classes
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
                <i class="fa-brands fa-python fa-fw"></i>CHBE101: Intro to ChemE
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>CHBE301/302:
                Thermodynamics
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>CHBE410: Statistics
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>CHBE442: Heat and Mass
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>CHBE437: Unit Ops Lab
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
                <i class="fa-solid fa-code-branch fa-fw"></i>Git / Version
                Control
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>Querying databases /
                SQL
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/">
                <i class="fa-brands fa-python fa-fw"></i>Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleBlock;
