import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="flex flex-col">
        <ul className="flex pt-6 pb-2 m-auto">
          <li className="font-serif text-2xl tracking-widest uppercase font-title">
            Jorge Van de Sompel
          </li>
        </ul>
        <ul className="flex w-full pb-2">
          <li className="inline-block m-auto ">
            <a
              href="#about"
              className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
            >
              About
            </a>
          </li>
          <li className="inline-block m-auto ">
            <a
              href="#projects"
              className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
            >
              Work
            </a>
          </li>
          <li className="inline-block m-auto ">
            <a
              href="#contact"
              className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
