import React from "react";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import "./CodeHighlighter.css";

function CodeHighlighter({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-highlighter-container">
      <div className="code-wrapper">
        <div className="code-heading-block">
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="copy-button">
              <i className="fa-regular fa-clipboard fa-fw"></i>{" "}
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </CopyToClipboard>
        </div>
        <div>
          <SyntaxHighlighter
            language={language}
            style={darcula}
            customStyle={{
              backgroundColor: "rgb(40, 42, 54)",
              marginTop: "-2rem",
            }}
            showLineNumbers
            lineNumberStyle={{
              paddingRight: "10px",
              borderRight: "1px solid #ccc",
            }}
            className="code-block"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default CodeHighlighter;
