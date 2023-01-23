import { useRouter } from 'next/router';

const map: Record<string, Record<string, string>> = {
  en: {
    os: 'Operating system',
    intro: 'Introduction',
  },
  ko: {
    os: '운영체제',
    intro: '소개',
  },
};

export default function useBreadCrumbItems() {
  const { asPath, locale } = useRouter();
  const titles = map[locale || 'en'];

  const splitPath = asPath.split('/');
  const getPath = (idx: number) => splitPath.slice(0, idx + 1).join('/');

  return splitPath.map((path, idx) => ({ path: getPath(idx), title: titles[path] })).filter((v) => v.title);
}
