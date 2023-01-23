import { css } from '@emotion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchBar, List, OSIcon, ChevronButton, FlexRow } from '../components';

export default function Sidebar() {
  const { t } = useTranslation('common');
  const [openOS, setOpenOS] = useState(false);
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
        <List.LinkItem href="/os" depth={1}>
          <FlexRow>
            <OSIcon />
            {t('operating-system')}
          </FlexRow>
          <ChevronButton
            onClick={(e) => {
              e.preventDefault();
              setOpenOS(!openOS);
            }}
            isOpen={openOS}
          />
        </List.LinkItem>
        {openOS && (
          <List.LinkItem href="/os/intro" depth={2}>
            <FlexRow>
              <OSIcon />
              {t('intro')}
            </FlexRow>
          </List.LinkItem>
        )}
      </List>
    </aside>
  );
}
