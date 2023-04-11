import React from "react";
import "../LecturePages/LecturePages.css";

export default function HowItWorks() {
  return (
    <>
      <div className="modules">
        <div className="title-block">
          <i class="fa-solid fa-map"></i>
          <h3>The Game Plan</h3>
        </div>
        <div className="description-block">
          <h1>Introduction</h1>
          <p>
            Data analysis and data science skills using highly available
            open-source software such as python is invaluable to engineers in
            the age of emerging importance of machine learning and data science.
            Python is one of the most widely used tools for data science to
            create data pipelines and speed up large-scale data analysis
            compared to using excel. Engineers at large companies such as Tesla,
            ExxonMobil, Apple, etc. readily use data science tools such as
            python and databases to pipeline their data and require engineers to
            rely on statistical analysis to make decisions. Outside of
            MATLAB/Mathcad, very few programming languages are taught
            extensively in chemical engineering. Therefore, there is a need to
            have more resources to teach data analysis skills using newer tools
            like python for UMD chemical engineers to be competitive in
            industry.
          </p>
        </div>

        <div className="description-block">
          <h1>Purpose</h1>
          <p>
            The purpose of this website is to act as another resource for
            students to self learn python while highlighting different python
            applications within UMD's chemE curriculum. As someone who self
            learned python in bits and pieces, I found it frustrating know where
            to start without gaining experience from internships/co-op's where I
            had to learn it to get work done, and spent numerous hours trying to
            find the right sources. Therefore, this website is geared towards
            teaching you the skills useful for engineers, and hopefully will
            make you more valuable as data analysts in your future roles. The
            idea and motivation for this project stems from
          </p>
        </div>
        <div className="description-block">
          <h1>Problems We are Solving</h1>
          <p>
            As a UMD ChemE student, I saw three main problems as I went through
            our program
          </p>
          <br></br>
          <ol>
            <li style={{ margin: "20px" }}>
              We are not proficient in an single programming language
            </li>
            <li style={{ margin: "20px" }}>
              We lack data analysis skills to deal with large data sets
              efficiently
            </li>
            <li style={{ margin: "20px" }}>
              We don't have the skills to quickly plot different visualization
              to help make decisions when we don't know what trend to expect
            </li>
          </ol>
          <br></br>
          <p>
            The 1st problem stems from the various classes using different types
            of technology and tools. As I went through the ChemE curriculum,
            teachers suggested various different tools such as MATLAB, MathCAD,
            polymath, Mathematica/Wolfram Alpha, excel, etc. However, I came out
            of the program not feeling like I could take any of those tools and
            use them at my job confidently.
          </p>
          <br></br>
          <p>
            The 2nd problem I observed was how many students did not know how to
            analysis large data sets. An example of what a large data is imagine
            you are running a test on some machine in a lab, and data is take
            periodically (e.g Heat Exchanger, Separation, Gas Chromatography).
            However, the machine spits out a new excel worksheet for every run.
            Therefore, if you manually do the analysis, you would have to
            manually drag and select the columns you would want to plot. Then,
            if you want to change the color of each line or add markers, you
            would have to choose that for every line. Ultimately, this is time
            consuming and takes way too long. This problem was more evident
            while take the Unit Ops class (CHBE437).
          </p>
          <br></br>
          <p>
            The 3rd problem comes from while we learn lot of different
            statistical tests in CHBE410 (Statistics), we are limited to work
            with data in excel, and then exporting it Minitab or Origin.
            However, this requires us to do aggregation of the data in one
            software and then the plotting in another. This is time costly, and
            not ideal for creating a workflow/pipeline to do analysis routinely.
          </p>
          <br></br>
          <p>
            Therefore, this course is geared towards tackling these problems and
            trying to give you the tools to make python your one-stop-shop for
            all data analysis, from processing data, plotting, and analysis. As
            you go through the course you will learn different techniques that
            will give you a comprehensive overview data analysis in python
            useful for engineers.
          </p>
        </div>
        <div className="description-block">
          <h1>How to Navigate this Course</h1>
          <p>
            The structure of this course is broken down into modules. We will
            start from the basics of how to download the tools you need to start
            working with Python and go over some of the basic fundamentals of
            coding. It's expected that you have some knowledge of programming
            taught either from CHBE250 (UMD programming course), but we will
            review them briefly. Once you have a strong fundamental of basic
            programming skills, we will go more in depth to specific python
            libraries you can use.
          </p>
          <br></br>
          <p>
            As you learn new skills, the course will follow up with an example
            of putting the skills to use. The goal is that as you learn more and
            more skills, you will unlock different applications and example.
            Therefore, you can stay engaged and see how you can apply the skills
            right away. For each lecture, there will be an accompanying jupyter
            notebooks that you can try for yourself. Then, followed by each
            lecture, if you've learned enough to reach a checkpoint example, you
            can choose to do the example and practice your new skills, or you
            could continue to learn and come back after have a more
            comprehensive overview. The picture below depicts how each skills
            come with examples, and where the example information is stored.
          </p>
          <div className="title-image-container">
            <img
              src={require("../../images/how-it-works-flow-diagram.png")}
              alt="Italian Trulli"
              width="75%"
            ></img>
          </div>
          <br></br>
          <p>
            Since this is a self-taught course, we also want you to choose how
            you learn depending on your level of programming and python
            experience. There are three different types of people we try to
            design the course and three different learning paths you can take.
          </p>
          <ol>
            <li style={{ margin: "20px" }}>
              Path 1 (General): You follow the modules and complete the examples
              as you hit each checkpoint and right after learning the skill
            </li>
            <li style={{ margin: "20px" }}>
              Path 2 (Some Coding Exp): You can choose which examples to do and
              skip around based on the skills you want to learn / review
            </li>
            <li style={{ margin: "20px" }}>
              Path 3 (Python Exp): You can choose to skip or go through the
              modules quickly to refresh your knowledge in python, then use the
              examples as applications of how to apply python in chemE.
            </li>
          </ol>
          <div className="title-image-container">
            <img
              src={require("../../images/learning-paths.png")}
              alt="Italian Trulli"
              width="100%"
              className="sample-images"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
