import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full shadow-smTop">
      <nav className="flex flex-col py-2 m-auto">
        <ul className="flex w-full py-2 m-auto">
          <li className="m-auto sm:px-8">
            <a
              href="https://github.com/jorgevds"
              target="_blank"
              rel="noopener noreferrer"
              title="Click me! I am safe and open in a new tab!"
            >
              <img src="/svg/githublogo.svg" className="m-auto" />
            </a>
          </li>
          <li className="m-auto sm:px-8">
            <a
              href="https://www.linkedin.com/in/jorge-van-de-sompel-94607b191/"
              target="_blank"
              rel="noopener noreferrer"
              title="Click me! I am safe and open in a new tab!"
            >
              <img src="/svg/gmail.svg" className="w-1/12 m-auto h-1/12" />
            </a>
          </li>
          <li className="w-1/6 m-auto sm:px-8">
            <a href="mailto:jorgevandesompel@gmail.com?Subject=I%20want%20to%20talk">
              <img src="/svg/gmail.svg" className="w-1/6 m-auto" />
            </a>
          </li>
        </ul>
        <ul className="flex m-auto text-sm">
          <li className="m-auto sm:px-8">
            Copyright &copy; {new Date().getUTCFullYear()}. All rights reserved.
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
