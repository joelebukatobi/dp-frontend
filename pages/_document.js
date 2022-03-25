import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="/js/app.js"></script>
    </Html>
  );
}
