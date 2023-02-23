import React from "react";
import "./LecturePages.css";
import { Checklist } from "../../LectureMaterial/Checklist";
import { CodeHighlighter } from "../../LectureMaterial/CodeHighlighter";

export default function SetupWorkspace() {
  const obj = [
    "Download and install an IDE (vscode)",
    "Download and install Git Bash",
    "Configuring your vscode",
  ];

  const code = `
  function sayHello(name) {
    console.log('Hello, ' + name + '!');
  }
  sayHello('World');
`;

  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Setting Up a Workspace</h1>
        <div className="title-image-container">
          <img
            src={require("../../../images/workspace.jpg")}
            alt="Italian Trulli"
            className="title-image"
            width="450"
            height="350"
          ></img>
        </div>
        <h3 className="headers">Objectives</h3>
        <Checklist items={obj}></Checklist>
      </div>

      {/* Blurb 1 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Components of a Workspace
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
        <h4 className="key-terms-list-header">Key Terms</h4>
        <ol className="key-terms-list">
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
        </ol>
      </div>

      {/* Blurb 2 */}
      <div className="information-container">
        <h3 className="information-container-header ">
          Integrated Development Environment (IDE)
        </h3>
        <br></br>
        <p className="information-container-content">
          The first thing we will download is vscode. Vscode is an IDE, which
          means it can act as more than a text editor and is helpful in
          combining different tools a programmer needs, but also allows for a
          lot of personalization and other cool features you can download
          through extensions. An IDE is like a one stop shop that combines all
          the tools you need together, creating your programming environment.
        </p>
        <br></br>
        <p className="information-container-content">
          First, go to
          <a
            href="https://code.visualstudio.com/Download"
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
        <br></br>
        <p className="information-container-content">
          Once you download vscode you can follow these three setup video to get
          started on how to make a file, learn how to install extensions, and
          customize the color scheme.
          <p>
            You can go to the youtube links below or go to
            <a
              href="https://code.visualstudio.com/learn/get-started/basics"
              style={{ padding: "5px" }}
            >
              https://code.visualstudio.com/learn/get-started/basics
            </a>{" "}
            for more information
          </p>
        </p>
        <br></br>
        <div className="video-block">
          <iframe
            title="Install vscode"
            width="30%"
            heigh="100px"
            src="https://www.youtube.com/embed/ITxcbrfEcIY"
          ></iframe>
          <iframe
            title="Install vscode"
            width="30%"
            src="https://www.youtube.com/embed/SKcZ3cwX8lA"
          ></iframe>
          <iframe
            title="Install vscode"
            width="30%"
            src="https://www.youtube.com/embed/HOShAQzOy4Q"
          ></iframe>
        </div>
      </div>

      {/* Blurb 3 */}
      <div className="information-container">
        <h3 className="information-container-header ">Command Line</h3>
        <br></br>
        <p className="information-container-content">
          Your computer comes with command line terminals already (Command
          Prompt/Powershell for Windows, Terminal for Mac), but their commands
          are not as common and not the same syntax as typical linux/unix
          commands. Therefore, its better to get a graphical user interface
          (GUI) that uses more common syntax (UNIX) and allows you to use git
          commands (helpful for working with git repositories)
          https://git-scm.com/downloads
        </p>
        <p className="information-container-content">
          You can download it from{" "}
          <a href="https://git-scm.com/downloads" style={{ padding: "5px" }}>
            https://git-scm.com/downloads
          </a>
        </p>
      </div>

      {/* Blurb 4 */}
      <div className="information-container">
        <h3 className="information-container-header ">Command Line</h3>
        <br></br>
        <p className="information-container-content">
          Your computer comes with command line terminals already (Command
          Prompt/Powershell for Windows, Terminal for Mac), but their commands
          are not as common and not the same syntax as typical linux/unix
          commands. Therefore, its better to get a graphical user interface
          (GUI) that uses more common syntax (UNIX) and allows you to use git
          commands (helpful for working with git repositories)
          https://git-scm.com/downloads
        </p>
        <p className="information-container-content">
          You can download it from{" "}
          <a href="https://git-scm.com/downloads" style={{ padding: "5px" }}>
            https://git-scm.com/downloads
          </a>
        </p>
        {/* <CodeHighlighter code={code} />; */}
      </div>
    </>
  );
}
