import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";

export default function SetupWorkspace() {
  const objectives = [
    "Objective 1: Download and install vscode",
    "Objective 2: Configuring your vscode with your first extension and change color theme",
    "Objective 3: Download and install terminal GUI (git bash)",
    "Objective 4: Make git bash your default terminal in vscode",
  ];

  const obj2 = [
    "Task 1: You were able to make a file",
    "Task 2: You know where to find and download extensions on vscode",
    "Task 3: You know how to change the color theme of your vscode",
  ];

  const obj3 = ["Task 1: Successfully downloaded git bash and can open it"];

  const obj4 = [
    "Task 1: When you open a new terminal in vscode, it is a git bash terminal",
  ];

  return (
    <>
      <div>
        <h1>Downloading the tools for your programming environment</h1>
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
          <h3 className="information-container-header">Learning Objectives</h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      {/* Section 1 */}
      <div className="information-container">
        <h3 className="information-container-header">
          Introduction: Components of a Workspace
        </h3>
        <p>
          Similar to how you have a desk setup with a computer, mouse pad,
          pencil holder, drawers, etc, a programmer also needs a workspace that
          has all the tools they need to code. One of the most important parts
          of programming is having an environment that not only has all the
          tools needed to help you get start, but is also flexible as you become
          a more advanced programmer.
        </p>
        <p>
          The main components to a workspace for programming includes a text
          editor and a terminal that helps you interact with your computer
          through the command line. Once we have these components, we will be
          able to develop, run, test, and manage code/projects all in one place.
        </p>
        <h4 className="key-terms-list-header">Key Terms</h4>
        <ul className="key-terms-list">
          <li>
            Command Line: a user interface that's navigated by typing commands
            and prompts instead of using a mouse.
          </li>
          <ul className="key-terms-list">
            <li>
              The command line is helpful for when you need to install python
              packages and working with a git repository (more about this later)
            </li>
            <li>
              Git repository is like an online folder that helps you store your
              code and share it with everyone else. It is also useful for
              version control of your code
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
        <h3 className="information-container-header">
          Objective 1: Install vscode
        </h3>
        <p>
          The first thing we will download is vscode. vscode is an IDE
          (Integrated Development Environment), which means it can act as more
          than a text editor and is helpful in combining different tools a
          programmer needs, but also allows for a lot of personalization and
          other cool features you can download through extensions. An IDE is
          like a one stop shop that combines all the tools you need together,
          creating the base of your programming environment.
        </p>
        <p>
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
        <img
          src={require("../../../images/vscode_download.jpg")}
          alt="Italian Trulli"
          width={500}
          className="sample-images"
        ></img>
        <h3 className="information-container-header ">
          Objective 2: Intro to Configuring your vscode
        </h3>
        <div>
          <p>
            Once you finish downloading vscode, watch the three videos below to
            learn some of the basic things you are able to do in vscode. You can
            go directly to the youtube links below or go to this
            <a
              href="https://code.visualstudio.com/learn/get-started/basics"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "5px" }}
            >
              LINK
            </a>
            for the source of the videos for more information
          </p>
          <p></p>
        </div>
        <div class="row">
          <div class="column">
            <h3>Making a File</h3>
            <iframe
              title="Install vscode"
              width="100%"
              height="100%"
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
        <h3 className="information-container-header">Knowledge Check</h3>
        <p>
          At the end of these three videos, you should have accomplished these 3
          things.
        </p>
        <Checklist objectives={obj2}></Checklist>
      </div>

      {/* Section 3 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Objective 3: Installing a Command Line Graphical User Interface (GUI)
        </h3>
        <p>
          Your computer comes with command line terminals already (Command
          Prompt/Powershell for Windows, Terminal for Mac), but their commands
          are not as common and not the same syntax as the typical commands we
          will use for installing python packages. Therefore, its better to get
          a graphical user interface (GUI) that uses more common syntax (UNIX)
          and allows you to use git commands (helpful for working with git
          repositories).
        </p>
        <p>
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
        <h3 className="information-container-header">Knowledge Check</h3>
        <Checklist objectives={obj3}></Checklist>
        <p>Should look like the picture below when you open it</p>
        <img
          src={require("../../../images/git-bash.png")}
          alt="Italian Trulli"
          width={600}
          className="sample-images"
        ></img>
      </div>

      {/* Section 4 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Objective 4: Setting up Terminal in vscode
        </h3>
        <p>
          Now that you've installed vscode and Git Bash, lets take a closer look
          at how they will interact with each other. When you open your vscode,
          on the top left, there should be a "Terminal" dropdown. From the
          Terminal dropdown, click "New Terminal"
        </p>
        <img
          src={require("../../../images/terminal-in-vscode.png")}
          alt="Italian Trulli"
          width="75%"
          className="sample-images"
        ></img>
        <p>
          You should then see a terminal pop-up on the bottom half of your
          vscode. The default is most likely not git bash depending on if you
          have a window or Mac. Therefore, we can change the default terminal to
          git-bash by going into the settings. Click on the dropdown arrow and
          then click "Set Default Terminal"
        </p>
        <img
          src={require("../../../images/default-terminal.png")}
          alt="Italian Trulli"
          width="75%"
          className="sample-images"
        ></img>
        <p>
          Then in the middle top of your vscode, a dropdown for all the
          different terminals options will pop up, and you should click Gitbash.
        </p>
        <img
          src={require("../../../images/choose-terminal.png")}
          alt="Italian Trulli"
          width="75%"
          className="sample-images"
        ></img>
        <p>
          Now whenever you open a new terminal in vscode it will be a git bash
          terminal. You can tell it is a git bash terminal because of the word
          "bash" in the upper right corner next to the + button.
        </p>
        <img
          src={require("../../../images/terminal.png")}
          alt="Italian Trulli"
          width="100%"
          className="sample-images"
        ></img>
        <h3 className="information-container-header">Knowledge Check</h3>
        <Checklist objectives={obj4}></Checklist>
      </div>

      {/* Navigational Buttons*/}
      <NavFooter backPath="/modules" forwardPath="/modules/installing-python" />
    </>
  );
}
