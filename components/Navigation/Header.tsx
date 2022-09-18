import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="flex flex-col">
                <ul className="flex py-4 m-auto">
                    <li className="font-serif text-2xl tracking-widest uppercase font-title">
                        <a href="/" title="Homepage">
                            Jorge Van de Sompel
                        </a>
                    </li>
                </ul>
                <ul className="flex w-full py-2 m-auto minxl:w-largeClamp">
                    <li className="inline-block m-auto">
                        <a
                            href="/#about"
                            className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
                        >
                            About
                        </a>
                    </li>
                    <li className="inline-block m-auto">
                        <a
                            href="/#projects"
                            className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
                        >
                            Work
                        </a>
                    </li>
                    <li className="inline-block m-auto">
                        <a
                            href="/blog"
                            className="py-1 transition duration-300 ease-in-out minlg:px-16 minlg:hover:bg-black minlg:hover:text-white"
                        >
                            Blog
                        </a>
                    </li>
                    <li className="inline-block m-auto">
                        <a
                            href="/#contact"
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
