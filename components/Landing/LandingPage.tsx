import React from "react";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <section className="z-50 flex flex-col flex-1 w-full py-6 m-auto">
      <Hero />
      <Projects />
      <Contact />
    </section>
  );
};
export default LandingPage;
