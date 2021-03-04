import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="flex flex-col m-auto">
        <ul className="flex py-4 pt-6 m-auto">
          <li className="font-serif text-xl tracking-wider uppercase">
            Jorge Van de Sompel
          </li>
        </ul>
        <ul className="flex w-full pb-2 m-auto">
          <li className="m-auto sm:px-8">
            <a href="#about">About</a>
          </li>
          <li className="m-auto sm:px-8">
            <a href="#projects">Work</a>
          </li>
          <li className="m-auto sm:px-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
