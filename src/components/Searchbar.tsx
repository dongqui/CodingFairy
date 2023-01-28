import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';

import { SearchIcon } from './icons';

export default function SearchBar() {
  const { t } = useTranslation('common');
  return (
    <div
      css={css`
        padding: 12px;
      `}
    >
      <button
        css={css`
          display: flex;

          background-color: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          align-items: center;
          padding: 0;
        `}
      >
        <SearchIcon />
        {t('search')}
      </button>
    </div>
  );
}
