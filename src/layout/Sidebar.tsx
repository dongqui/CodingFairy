import { css } from '@emotion/react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { SearchBar, List, OSIcon, ChevronButton, FlexRow } from '../components';

const MINIMUM_WIDTH = 220;
const MAXIMUM_WIDTH = 480;

export default function Sidebar() {
  const { t } = useTranslation('common');
  const [openOS, setOpenOS] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(223);

  function resize(e: MouseEvent) {
    const size = e.clientX;
    if (size >= MINIMUM_WIDTH && size <= MAXIMUM_WIDTH) {
      setSidebarWidth(e.clientX);
    }
  }

  function handleResizebarMouseDown() {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', resize);
    });
  }

  return (
    <aside
      css={css`
        width: ${sidebarWidth}px;
        background-color: rgb(32, 32, 32);
        box-shadow: rgb(255 255 255 / 5%) -1px 0px 0px 0px inset;
        color: rgb(155, 155, 155);
        font-weight: 500;
        height: 100%;
        flex-shrink: 0;
        position: relative;
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

      <div
        css={css`
          position: absolute;
          right: 0px;
          width: 0px;
          flex-grow: 0;
          z-index: 1;
          top: 0px;
          bottom: 0px;
          pointer-events: auto;
        `}
        onMouseDown={handleResizebarMouseDown}
      >
        <div
          css={css`
            cursor: col-resize;
            height: 100%;
            width: 12px;
            margin-left: -6px;
          `}
        />
      </div>
    </aside>
  );
}
