import type { GetStaticProps } from 'next';
import { Heading, IndexList, Spacing } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <>
      <Heading level={2}>{t('os')}</Heading>
      <Spacing size={40} />
      <IndexList>
        <IndexList.Item href="os/intro">{t('intro')}</IndexList.Item>
      </IndexList>
    </>
  );
}
