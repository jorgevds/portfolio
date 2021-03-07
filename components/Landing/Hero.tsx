import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <article className="m-auto my-24 text-center min-h-md" id="about">
      <h1
        className="mb-4 text-5xl sm:text-4xl"
        data-aos="fade-up"
        data-aos-once="true"
      >
        Hi, I'm Jorge
      </h1>
      <h2
        className="text-2xl sm:text-xl sm:m-6"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
      >
        I make full stack web apps in React, TypeScript, and Node.js
      </h2>
    </article>
  );
};

export default Hero;
