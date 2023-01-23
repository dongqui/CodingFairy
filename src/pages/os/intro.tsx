import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

import { Heading, Paragraph, Spacing } from '../../components';

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['common']);
  return (
    <>
      <div>{t('intro')}</div>
      <Heading level={1}>운영체제 - 소개</Heading>
      <Spacing size={30} />
      <Paragraph>컴퓨터는 인간의 말을 이해하지 못합니다. 오직, 1과 0으로만 이루어진 언어를 사용하기 때문이죠. 그렇다면, 우리는 어떻게 컴퓨터를 사용하고 있는걸까요?</Paragraph>
    </>
  );
}
