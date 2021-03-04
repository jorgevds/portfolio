import React from "react";
import Head from "next/head";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jorge Van de Sompel</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* metatags */}
        <meta
          name="description"
          content="De persoonlijke website en thuis van het portfolio van Jorge Van de Sompel!"
        />
        <meta property="og:title" content="Jorge Van de Sompel" />
        <meta
          property="og:site_name"
          content="CV en portfolio Jorge Van de Sompel"
        />
        <meta
          property="og:description"
          content="De persoonlijke website en thuis van het portfolio van Jorge Van de Sompel!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bit.ly/3mWfIvZ" />
        <meta property="og:url" content="https://jorgevds.github.io/resume/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Profielfoto van Jorge Van de Sompel"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
