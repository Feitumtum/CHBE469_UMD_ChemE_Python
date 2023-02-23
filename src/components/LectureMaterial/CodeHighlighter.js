import React from "react";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./CodeHighlighter.css";

function CodeHighlighter({ code }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={darcula}
      showLineNumbers
      className="code-block"
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
