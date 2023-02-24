import React from "react";
import Checklist from "../../LectureMaterial/Checklist";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

export default function PythonBasics() {
  const objectives = [
    "Download and install an IDE (vscode)",
    "Configuring your vscode with your first extension and change color theme",
    "Download and install terminal GUI (git bash)",
  ];

  const code = `
  function sayHello(name) {
    console.log('Hello, ' + name + '!');
  }
  sayHello('World');
`;

  return (
    <>
      <Checklist objectives={objectives} />
      <h1 className="python-basics">python-basics</h1>
      <CodeHighlighter code={code} />
    </>
  );
}
