import { css } from '@emotion/react';
import Link from 'next/link';
import { Fragment } from 'react';

interface BreadcrumbProps {
  items: {
    path: string;
    title: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      css={css`
        height: 4.5rem;
        display: flex;
        align-items: center;
        color: inherit;
        line-height: 1.2;
        font-size: 1.4rem;
        width: 100%;
      `}
    >
      {items.map((item, idx) => (
        <Fragment key={item.title}>
          {idx !== 0 && <Separation />}
          <Item path={item.path} title={item.title} />
        </Fragment>
      ))}
    </nav>
  );
}

interface ItemProps {
  path: string;
  title: string;
}
function Item({ path, title }: ItemProps) {
  return (
    <Link
      css={css`
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 2.4rem;
        border-radius: 0.44rem;
        flex-shrink: 1;
        padding: 0.2rem 0.6rem 0 0.6rem;
        :hover {
          background-color: rgba(255, 255, 255, 0.055);
        }
      `}
      href={path}
    >
      {title}
    </Link>
  );
}

function Separation() {
  return (
    <div
      css={css`
        margin: 0 0.2rem;
      `}
    >
      /
    </div>
  );
}
