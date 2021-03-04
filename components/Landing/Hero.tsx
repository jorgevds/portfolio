import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <article className="m-auto my-24 text-center min-h-md" id="about">
      <h1 className="mb-4 text-5xl">Hi, I'm Jorge</h1>
      <h2 className="text-2xl">
        I make full stack web apps in React, TypeScript, and Node.js
      </h2>
    </article>
  );
};

export default Hero;
