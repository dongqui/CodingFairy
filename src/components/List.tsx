import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { css } from '@emotion/react';

export default function List({ children }: PropsWithChildren) {
  return <ul css={css``}>{children}</ul>;
}

interface LinkItemProps {
  href: string;
  depth: number;
  isCurrentPath: boolean;
}

List.LinkItem = function LinkItem({ children, href, depth, isCurrentPath }: PropsWithChildren<LinkItemProps>) {
  return (
    <li
      css={css`
        margin: 1px 4px;
        border-radius: 4px;
        background-color: ${isCurrentPath ? 'rgba(255, 255, 255, 0.055)' : 'inherit'};
      `}
    >
      <Link
        href={href}
        css={css`
          &:hover {
            background-color: rgba(255, 255, 255, 0.055);
          }
          border-radius: 4px;

          padding: 3px 0 3px ${depth * 14}px;

          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 8px;
          height: 28px;
        `}
      >
        {children}
      </Link>
    </li>
  );
};
