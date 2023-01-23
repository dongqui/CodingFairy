import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { SearchIcon } from './icons';

export default function SearchBar() {
  const { t } = useTranslation('common');
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
        {/* {t('search')} */}
      </button>
    </div>
  );
}
