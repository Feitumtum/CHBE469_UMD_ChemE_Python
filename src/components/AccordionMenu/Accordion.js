import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <span>{item.title}</span>
            <button className="accordion-toggle">
              {activeIndex === index ? "-" : "+"}
            </button>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
