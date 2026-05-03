import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const section = location.state?.scrollTo;

    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}