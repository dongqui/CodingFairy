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
        height: 27px;
        margin: 1px 0;
      `}
    >
      <Link
        href={href}
        css={css`
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 8px;
        `}
      >
        {children}
      </Link>
    </li>
  );
};
