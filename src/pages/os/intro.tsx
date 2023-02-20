import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import whatIsOsImage from '/public/images/os/intro/rsz_1what-is-os.jpg';
import UIImage from '/public/images/os/intro/ui.jpg';
import manageImage from '/public/images/os/intro/os-manage.jpg';

import { Heading, Paragraph, Divider, Image, Stack, Youtube, Spacing } from 'components';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'os-intro'])),
  },
});

export default function Page() {
  const { t } = useTranslation(['os-intro']);
  return (
    <Stack>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description') || ''} />
        <meta name="keywords" content={t('keywords') || ''} />
        <meta name="author" content="CodingFairy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.codingfairy.org/"></link>
      </Head>

      <Heading level={1}>{t('title')}</Heading>
      <Youtube>
        <iframe
          src="https://www.youtube.com/embed/V50xvIyIVJo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Youtube>

      <Heading level={2}>{t('what-is-os')}</Heading>
      <Image src={whatIsOsImage} alt="what is os" />
      <Paragraph>{t('os-is')}</Paragraph>
      <Divider />
      <Heading level={2}>{t('what-does-os')}</Heading>
      <Heading level={3}>{t('1-manage')}</Heading>
      <Image src={manageImage} alt="os manages all" />
      <Paragraph>{t('1-manage-explain')}</Paragraph>
      <Heading level={3}>{t('2-env')}</Heading>
      <Image src={UIImage} alt="os offers UI" />
      <Paragraph>{t('2-env-explain')}</Paragraph>
      <Spacing size={10} />
    </Stack>
  );
}
