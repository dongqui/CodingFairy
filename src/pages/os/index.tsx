import type { GetStaticProps } from 'next';
import { Heading, Paragraph, Spacing } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default function Page() {
  return <>ㅑㅜㅇvvvㄷ</>;
}
