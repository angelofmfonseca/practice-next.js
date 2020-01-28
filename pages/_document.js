import Document, { Head, Main, NextScript } from "next/document";

import React, { Component } from "react";

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
