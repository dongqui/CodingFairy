import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
// import { appWithTranslation } from '../_dist/esm/appWithTranslation';

import Layout from 'layout';
import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(App);