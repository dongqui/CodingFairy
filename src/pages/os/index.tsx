import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Heading, IndexList, Spacing } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'os-index'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['os-index', 'common']);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description') || ''} />
        <meta name="keywords" content={t('keywords') || ''} />
      </Head>
      <Heading level={2}>{t('os', { ns: 'common' })}</Heading>
      <Spacing size={40} />
      <IndexList>
        <IndexList.Item href="os/intro">{t('intro', { ns: 'common' })}</IndexList.Item>
      </IndexList>
    </>
  );
}
