import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <html>
          <Head>
            <style>{`body { background: #00A847 }`}</style>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </>
    );
  }
}
