import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Layout from '../layouts';
import GlobalStyle from '../styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App /*, nextI18NextConfig */);
