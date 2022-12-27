import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });
    return <Component {...pageProps} />;
}

export default MyApp;
