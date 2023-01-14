import { css } from '@emotion/react';

import { SearchIcon } from '../components/icons';

export default function SearchBar() {
  return (
    <div
      css={css`
        padding: 14px;
      `}
    >
      <button
        css={css`
          display: flex;
          gap: 8px;
          background-color: transparent;
          outline: none;
          border: none;
          cursor: pointer;
        `}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
