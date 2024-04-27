"use client";
import { docs } from "@/db/docs";
import { createRef, useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { SingleDocSection } from "./SingleDocSection";

const Document = () => {
  const [activeSection, setActiveSection] = useState();
  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener("resize", (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);
  const refs = docs.reduce((refsObj, section) => {
    refsObj[section.id] = createRef();
    return refsObj;
  }, {});
  const handleClick = (name) => {
    refs[name].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className="flex">
      <SideMenu onLinkClick={handleClick} activeSection={activeSection} />
      <div className="w-4/5 p-4 flex-1 space-y-10">
        {docs.map((doc, index) => (
          <SingleDocSection
            key={index}
            activeSection={activeSection}
            data={doc}
            setActiveSection={setActiveSection}
            pageHeight={pageHeight}
            refs={refs}
          />
        ))}
      </div>
    </div>
  );
};

export default Document;
