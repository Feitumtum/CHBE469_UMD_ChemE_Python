import React from "react";
import { Button } from "../Buttons/Button";
import "./ModuleBlock.css";

function ModuleBlock() {
  return (
    <>
      <div className="modules">
        <div className="title-block">
          <i class="fa-brands fa-python"></i>
          <h3>Overall Roadmap</h3>
        </div>
        <div className="description-block">
          {/* 1st Section */}
          <h1>Introduction to Python</h1>
          <p>
            This section will cover the basics of getting started with python
            and learning some of the key libraries (Numpy, Pandas, Matplotlib,
            Seaborn) and teach you how to use them to deal with data using
            python.
          </p>
        </div>
        {/* Block 1 */}
        <div>
          <div className="module-block module-block-title">
            Introduction to Python
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/setup-workspace">
                <i class="fa-solid fa-desktop fa-fw"></i>Setting up your
                workspace
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/python-basics">
                <i class="fa-brands fa-python fa-fw"></i>Python basics using
                Jupter Notebooks
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/managing-data">
                <i class="fa-solid fa-table fa-fw"></i>Managing data in Python
                (Numpy and Pandas)
              </Button>
            </div>
            <div className="module-block-topic">
              <Button buttonType="btn--modules" path="/plotting-basics">
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
              <i class="fa-solid fa-chart-pie"></i>Statistical Analysis for
              Population
            </div>
            <div className="module-block-topic">
              <i class="fa-solid fa-chart-line"></i>Statistical Analysis for
              Trends
            </div>
            <div className="module-block-topic">
              <i class="fa-solid fa-flask"></i>Python Examples for ChemE Classes
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
              <div className="left-div">
                <i class="fa-brands fa-python"></i>CHBE101: Intro to ChemE
              </div>
              <div className="right-div">
                <em>15 min</em>
              </div>
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>CHBE301 Thermodynmaics
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>CHBE410
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>CHBE410
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
              <i class="fa-solid fa-code-branch"></i>Git / Version Control
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>Querying databases / SQL
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>CHBE410
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>Continue Learning
            </div>
          </div>
        </div>

        {/* Block 5 */}
        <div>
          <div className="module-block module-block-title">
            Machine Learning
          </div>
          <div className="module-block module-block-content">
            <div className="module-block-topic">
              <i class="fa-solid fa-code-branch"></i>Git / Version Control
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>Querying databases / SQL
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>CHBE410
            </div>
            <div className="module-block-topic">
              <i class="fa-brands fa-python"></i>Continue Learning
            </div>
          </div>
        </div>

        {/* 2nd Section
        <div className="description-block">
          <h1>Introduction to Python</h1>
          <p>
            The overall structure of this website is split into three main
            modules: Introduction, Analysis Techniques,and Additional Skills
          </p>
        </div> */}
      </div>
    </>
  );
}

export default ModuleBlock;
