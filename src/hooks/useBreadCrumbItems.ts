import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function useBreadCrumbItems() {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation('common');

  const splitPath = asPath.split('/');
  const getPath = (idx: number) => splitPath.slice(0, idx + 1).join('/');

  return splitPath.map((path, idx) => ({ path: getPath(idx), title: t(path) })).filter((v) => v.title);
}
