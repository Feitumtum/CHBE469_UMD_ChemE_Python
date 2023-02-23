import React from "react";
import { SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ code }) {
  return (
    <SyntaxHighlighter language="javascript" style={prism} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
