import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Container, Sidebar, Main, Header } from '../layouts';
import GlobalStyle from '../styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <div>
          <Header></Header>
          <Main>
            <Component {...pageProps} />
          </Main>
        </div>
      </Container>
    </>
  );
}

export default appWithTranslation(App /*, nextI18NextConfig */);
