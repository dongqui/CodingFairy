import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { css } from '@emotion/react';

export default function List({ children }: PropsWithChildren) {
  return <ul css={css``}>{children}</ul>;
}

interface LinkItemProps {
  href: string;
  depth: number;
}

List.LinkItem = function LinkItem({ children, href, depth }: PropsWithChildren<LinkItemProps>) {
  return (
    <li
      css={css`
        padding: 0 14px 0 ${depth * 14}px;
      `}
    >
      <Link
        href={href}
        css={css`
          text-decoration: none;
          display: flex;
          gap: 8px;
        `}
      >
        {children}
      </Link>
    </li>
  );
};
