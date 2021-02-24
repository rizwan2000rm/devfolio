import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
