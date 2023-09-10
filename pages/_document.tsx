import Document, { Head, Html, Main, NextScript } from "next/document";
import tg_logo from "/public/logo-png.png";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo-png.ico" />
          <meta
            name="description"
            content="See pictures from Next.js Conf and the After Party."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Next.js Conf and the After Party."
          />
          <meta property="og:title" content="Trippy Gandalf Artfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Trippy Gandalf Artfolio" />
          <meta
            name="twitter:description"
            content="See pictures from Next.js Conf and the After Party."
          />
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
