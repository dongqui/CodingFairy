import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import GTagScript from 'components/GTagScript';
import Layout from 'layout';
import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GTagScript />
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default appWithTranslation(App);
