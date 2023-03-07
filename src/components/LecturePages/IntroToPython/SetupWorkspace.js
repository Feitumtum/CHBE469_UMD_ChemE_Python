import React from "react";
import "./LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";

export default function SetupWorkspace() {
  const objectives = [
    "Objective 1: Download and install Vscode",
    "Objective 2: Configuring your vscode with your first extension and change color theme",
    "Objective 3: Download and install terminal GUI (git bash)",
  ];

  const tasks = [
    "Task 1: You were able to make a file",
    "Task 2: You know where to find and download extensions on vscode",
    "Task 3: You know how to change the color theme of your vscode",
  ];

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>
          Downloading the tools for your programming environment
        </h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/workspace.jpg")}
            alt="Italian Trulli"
            className="title-image"
            width="450"
            height="350"
          ></img>
        </div>
        <div className="objective-container">
          <h3 className="headers">
            <u>Learning Objectives</u>
          </h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      {/* Section 1 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Introduction: Components of a Workspace
        </h3>
        <br></br>
        <p className="information-container-content">
          Similar to how you have a desk setup with a computer, mouse pad,
          pencil holder, drawers, etc, a programming also needs a workspace that
          has all the tools they need to code. One of the most important parts
          of learning to programming is having not only having an environment
          that has all the tools needed to not only help you get start but also
          to allow you to grow.
        </p>
        <br></br>
        <p className="information-container-content">
          The main components to a workspace for programming includes a text
          editor and a terminal that helps you interact with your computer
          through the command line. Once we have these components, we will be
          able to develop, run, test, and manage code/projects all in one place.
        </p>
        <br></br>
        <h4 className="key-terms-list-header headers">Key Terms</h4>
        <ul className="key-terms-list">
          <li>
            Command Line: a user interface that's navigated by typing commands
            at prompts instead of using a mouse.
          </li>
          <ul className="key-terms-list">
            <li>
              The command line is helpful for when you need to install python
              packages and working with a git repository
            </li>
            <li>
              Git repository is like an online folder that helps you store your
              code and share it with everyone else. It is also useful for
              version control of your code.
            </li>
          </ul>
          <li>
            Text Editor/Code Editor: a program that will allow you to develop
            and write code. Notepad or microsoft word are types of text editor,
            however, useful text editors for programmers will include auto
            syntax error detection and suggestive prompts to help you code
            faster
          </li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Objective 1: Install Vscode
        </h3>
        <br></br>
        <p className="information-container-content">
          The first thing we will download is Vscode. Vscode is an IDE, which
          means it can act as more than a text editor and is helpful in
          combining different tools a programmer needs, but also allows for a
          lot of personalization and other cool features you can download
          through extensions. An IDE is like a one stop shop that combines all
          the tools you need together, creating your programming environment.
        </p>
        <br></br>
        <p className="information-container-content">
          Go to
          <a
            href="https://code.visualstudio.com/Download"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "5px" }}
          >
            https://code.visualstudio.com/Download
          </a>
          and download the 64 bit version of vscode for either mac or windows.
          If you have a 32-bit computer you can download the 32-bit. If you
          don't know which bit you have, then the default is 64-bit.
        </p>
        <br></br>
        <img
          src={require("../../../images/vscode_download.jpg")}
          alt="Italian Trulli"
          width={500}
          className="sample-images"
        ></img>
        <br></br>
        <br></br>
        <h3 className="information-container-header ">
          Objective 2: Intro to Configuring your Vscode
        </h3>
        <br></br>
        <div>
          <p className="information-container-content">
            Once you finish downloading vscode, watch the three videos below to
            learn some of the basic things you are able to do in Vscode. You can
            go directly to the youtube links below or click on this links for
            the source or the videos from the Vscode website.
            <a
              href="https://code.visualstudio.com/learn/get-started/basics"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "5px" }}
            >
              https://code.visualstudio.com/learn/get-started/basics
            </a>
            for more information
          </p>
          <br></br>
          <p className="information-container-content"></p>
        </div>
        <br></br>
        <div class="row">
          <div class="column">
            <h3>Making a File</h3>
            <iframe
              title="Install vscode"
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/ITxcbrfEcIY"
            ></iframe>
          </div>
          <div class="column">
            <h3>Installing Python Extension</h3>
            <iframe
              title="Install vscode"
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/SKcZ3cwX8lA"
            ></iframe>
          </div>
          <div class="column">
            <h3>Changing color theme</h3>
            <iframe
              title="Install vscode"
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/HOShAQzOy4Q"
            ></iframe>
          </div>
        </div>
        <br></br>
        <h3>Knowledge Check</h3>
        <p>
          At the end of these three videos, you should have accomplished these 3
          things.
        </p>
        <Checklist objectives={tasks}></Checklist>
      </div>

      {/* Section 3 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Objective 3: Installing a Command Line Graphical User Interface (GUI)
        </h3>
        <br></br>
        <p className="information-container-content">
          Your computer comes with command line terminals already (Command
          Prompt/Powershell for Windows, Terminal for Mac), but their commands
          are not as common and not the same syntax as the typical commands we
          will use for install python packages. Therefore, its better to get a
          graphical user interface (GUI) that uses more common syntax (UNIX) and
          allows you to use git commands (helpful for working with git
          repositories).
        </p>
        <br></br>
        <p className="information-container-content">
          <ul>
            <li>
              You can download it from
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "5px" }}
              >
                https://git-scm.com/downloads
              </a>
            </li>
            <li>
              The installation of git bash has lot of different options to
              configure your download, therefore, for a first timer who doesn't
              know what each option means, feel free to follow this link to help
              guide you
              <a
                href="https://adamtheautomator.com/git-bash/s"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "5px" }}
              >
                https://adamtheautomator.com/git-bash/
              </a>
            </li>
          </ul>
        </p>
      </div>

      {/* Section 4 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Explanation of Your Tools
        </h3>
        <br></br>
        <p className="information-container-content">
          Now that you've installed Vscode and Git Bash, lets take a closer look
          at what they have to offer and give more information about how we will
          interact with them in this course.
        </p>
        <br></br>
        <p className="information-container-content">fff</p>
      </div>
    </>
  );
}
