import React from "react";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <section className="flex flex-col flex-1 z-50 py-6 w-full m-auto">
      <Hero />
      <Projects />
      <Contact />
    </section>
  );
};
export default LandingPage;
