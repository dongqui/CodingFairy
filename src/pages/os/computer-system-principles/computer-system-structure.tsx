import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import computerStructure from '/public/images/os/computer-structure/computer-structure.jpg';

import { Heading, Paragraph, Divider, Image, Stack, Youtube, Spacing, Indent } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'os-computer-system-structure'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['os-computer-system-structure']);
  return (
    <Stack>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description') || ''} />
        <meta name="keywords" content={t('keywords') || ''} />
      </Head>
      <Heading level={1}>{t('subject')}</Heading>
      <Youtube src="https://www.youtube.com/embed/kN5SNuZX3gE" />
      <Divider />
      <Heading level={2}>{t('basic-structure')}</Heading>
      <Image src={computerStructure} alt="Computer structure image" />

      <Heading level={3}>{t('external-device')}</Heading>

      <Indent size={20}>
        <Heading level={4}>{t('IO-device')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('IO-device-description')}</Paragraph>
      </Indent>

      <Indent size={20}>
        <Heading level={4}>{t('local-buffer')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('local-buffer-description')}</Paragraph>
      </Indent>

      <Spacing size={10} />

      <Heading level={3}>{t('internal-device')}</Heading>
      <Indent size={20}>
        <Heading level={4}>{t('cpu')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('cpu-description')}</Paragraph>
      </Indent>

      <Indent size={20}>
        <Heading level={4}>{t('ram')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('ram-description')}</Paragraph>
      </Indent>

      <Spacing size={10} />

      <div>
        <Heading level={4}>{t('controller')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('controller-description')}</Paragraph>
      </div>

      <Spacing size={10} />

      <div>
        <Heading level={4}>{t('process')}</Heading>
        <Spacing size={5} />
        <Paragraph>{t('process-description')}</Paragraph>
      </div>

      <Spacing size={10} />
    </Stack>
  );
}
