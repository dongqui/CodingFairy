import type { AppProps } from 'next/app';

import { Container, Sidebar, Main } from '../layouts';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    </>
  );
}
