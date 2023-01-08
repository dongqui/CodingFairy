import type { AppProps } from 'next/app';

import { Sidebar } from '../layouts';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
