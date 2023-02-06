import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

import { LinkIcon } from './icons';

export default function IndexList({ children }: PropsWithChildren) {
  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
    >
      {children}
    </ul>
  );
}

interface ItemProps {
  href: string;
}

IndexList.Item = function Item({ href, children }: PropsWithChildren<ItemProps>) {
  return (
    <li
      css={css`
        width: 100%;
      `}
    >
      <Link
        href={href}
        css={css`
          display: block;
          width: 100%;
          text-decoration: none;
          padding: 4px;
          border-radius: 8px;
          &:hover {
            background-color: rgba(255, 255, 255, 0.055);
          }
        `}
      >
        <div
          css={css`
            display: inline;
            border-bottom: 1px solid rgba(255, 255, 255, 0.13);
            padding-bottom: 4px;
          `}
        >
          <div
            css={css`
              font-size: 2.5rem;
              font-weight: 700;
              color: rgba(255, 255, 255, 0.81);
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <LinkIcon />
            {children}
          </div>
        </div>
      </Link>
    </li>
  );
};
