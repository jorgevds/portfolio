// import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <article className="mt-24 text-center min-h-md" id="contact">
      <h1 className="mb-4">I'm always hard at work on the next project</h1>
      <h2>
        Please don't hesitate to contact me through my information down below
      </h2>
    </article>
  );
};

export default Contact;
