import { useEffect } from "react";

export function SingleDocSection({
  data: { title, id, content },
  activeSection,
  setActiveSection,
  pageHeight = 100,
  refs,
}) {
  const activeClass = activeSection === id ? "text-blue-500" : "";
  useEffect(() => {
    const observerConfig = {
      rootMargin: `-50px 0px -${pageHeight}px 0px`,
    };
    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeSection && entry.isIntersecting) {
          console.log("entry.target.id:", entry.target.id);
          console.log("offsetTop:", entry.target.offsetTop);
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[id]?.current);
    return () => observer.disconnect(); // Cleanup the observer if component unmount.
  }, [activeSection, id, setActiveSection, refs, pageHeight]);
  return (
    <section ref={refs[id]} className={`${activeClass}`} id={id}>
      <h3 className="text-3xl font-bold mb-5"> {title} </h3>
      {content}
    </section>
  );
}
