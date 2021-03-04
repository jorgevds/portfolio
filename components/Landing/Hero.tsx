import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <article className="m-auto my-24 text-center min-h-md" id="about">
      <img
        src="/img/profile.jpg"
        className="flex items-center justify-center m-auto mb-2 rounded-full w-36 h-36"
      />
      <h1 className="mb-4">Hi, I'm Jorge</h1>
      <h2>I make full stack web apps with React, TypeScript, and Node.js</h2>
    </article>
  );
};

export default Hero;
