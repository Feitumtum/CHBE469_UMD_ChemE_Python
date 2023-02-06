import React from "react";
import "../../App.css";
import ModuleBlock from "../ModuleBlock/ModuleBlock.js";
import Accordion from "../AccordionMenu/Accordion";

export default function Modules() {
  const items = [
    {
      title: "Item 1",
      content: "Item 1 Content",
    },
    {
      title: "Item 2",
      content: "Item 2 Content",
    },
    {
      title: "Item 3",
      content: "Item 3 Content",
    },
  ];

  return (
    <>
      <ModuleBlock />
      <Accordion items={items} />;
    </>
  );
}
