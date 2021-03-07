import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <article className="my-20 text-center min-h-md md:mx-4" id="contact">
      <h1 className="mb-4 text-2xl" data-aos="fade-up" data-aos-once="true">
        I'm always hard at work on the next project
      </h1>

      <h2
        className="mb-4 text-lg"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
      >
        But I'm always interested in opportunities to work together
      </h2>
      <h3
        className="text-xl"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="600"
      >
        Please don't hesitate to contact me through my information down below
      </h3>
    </article>
  );
};

export default Contact;
