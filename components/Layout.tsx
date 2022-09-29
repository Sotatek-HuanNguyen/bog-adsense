import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1103570262283389"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="m-auto flex h-full max-w-5xl flex-col">
        <Header />
        <div className="flex-grow  py-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
