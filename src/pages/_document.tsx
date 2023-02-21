import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="CodingFairy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.codingfairy.org/"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
