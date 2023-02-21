import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Layout from 'layout';
import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default appWithTranslation(App);
