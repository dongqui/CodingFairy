import { css } from '@emotion/react';

import { SearchBar, List, OSIcon } from '../components';

export default function Sidebar() {
  return (
    <aside
      css={css`
        width: 223px;
        background-color: rgb(32, 32, 32);
        box-shadow: rgb(255 255 255 / 5%) -1px 0px 0px 0px inset;
        color: rgb(155, 155, 155);
        font-weight: 500;
        height: 100%;
        flex-shrink: 0;
      `}
    >
      <header
        css={css`
          color: rgba(255, 255, 255, 0.81);
          font-weight: 500;
          font-size: 14px;
          padding: 14px;
        `}
      >
        Coding Fairy
      </header>
      <SearchBar />
      <List>
        <List.LinkItem href="/OS" depth={1}>
          <OSIcon />
          운영체제
        </List.LinkItem>
        <List.LinkItem href="/OS/intro" depth={1}>
          <OSIcon />
          운영체제
        </List.LinkItem>
      </List>
    </aside>
  );
}
