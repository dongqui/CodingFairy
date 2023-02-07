import type { GetStaticProps } from 'next';
import { Heading, Spacing } from 'components';
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
      <Heading level={2}>{t('computer-system-structure')}</Heading>
      <Spacing size={40} />
    </>
  );
}
