import Document, { Head, Html, Main, NextScript } from "next/document";
import tg_logo from "/public/logo-png.png";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo-png.ico" />
          <meta name="description" content="Trippy Gandalf Artfolio." />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta property="og:description" content="Trippy Gandalf Artfolio." />
          <meta property="og:title" content="Trippy Gandalf Artfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Trippy Gandalf Artfolio" />
          <meta name="twitter:description" content="Trippy Gandalf Artfolio" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
