import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full m-auto text-center shadow-smTop">
            <nav className="flex flex-col justify-center py-2 m-auto">
                <ul className="flex justify-center w-full py-6 m-auto minxl:w-largeClamp">
                    <li className="flex m-auto sm:px-8">
                        <a
                            href="https://github.com/jorgevds"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="I am safe and open in a new tab"
                            className="m-auto"
                        >
                            <img
                                src="/svg/githublogo.svg"
                                className="m-auto"
                                alt="Black and white Github mascot logo as svg"
                            />
                        </a>
                    </li>
                    <li className="flex m-auto sm:px-8">
                        <a
                            href="https://www.linkedin.com/in/jorge-van-de-sompel-94607b191/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="I am safe and open in a new tab"
                            className="m-auto"
                        >
                            <img
                                src="/svg/linkedin.svg"
                                className="m-auto chroma-icon"
                                alt="Linkedin logo as svg"
                            />
                        </a>
                    </li>
                    <li className="flex m-auto sm:px-8">
                        <a
                            href="mailto:jorgevandesompel@gmail.com?Subject=I%20want%20to%20talk"
                            className="m-auto"
                        >
                            <img
                                src="/svg/mail.svg"
                                className="m-auto chroma-icon"
                                alt="Gmail logo as svg"
                            />
                        </a>
                    </li>
                </ul>
                <ul className="flex m-auto mb-4 text-sm">
                    <li className="m-auto sm:px-8">
                        Copyright &copy; {new Date().getUTCFullYear()}. All
                        rights reserved.
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
