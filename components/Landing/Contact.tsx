// import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <article className="mt-24 text-center min-h-md md:mx-4" id="contact">
      <h1 className="mb-4 text-2xl">
        I'm always hard at work on the next project
      </h1>
      <h2 className="text-xl">
        Please don't hesitate to contact me through my information down below
      </h2>
    </article>
  );
};

export default Contact;
