import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <html>
          <Head>
            <style>{`body { background: #C0C0C0 }`}</style>
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
