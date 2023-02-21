import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Heading, IndexList, Spacing } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'index-page'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['index-page', 'common']);
  console.log(t);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description') || ''} />
        <meta name="keywords" content={t('keywords') || ''} />
      </Head>
      <main>
        <Heading level={2}>{t('index')}</Heading>
        <Spacing size={40} />
        <IndexList>
          <IndexList.Item href="os">{t('os', { ns: 'common' })}</IndexList.Item>
        </IndexList>
      </main>
    </>
  );
}
