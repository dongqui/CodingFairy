import { css } from '@emotion/react';
import { useState } from 'react';

import { Overlay, SidebarList, LeftChevronIcon } from 'components';
import Link from 'next/link';

import { SIDEBAR_MAXIMUM_WIDTH, SIDEBAR_MINIMUM_WIDTH, SIDEBAR_DEFAULT_WIDTH } from 'constant';

interface Props {
  show: boolean;
  isTablit: boolean;
  setShowSidebar: (show: boolean) => void;
}

export default function Sidebar({ show, isTablit, setShowSidebar }: Props) {
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_DEFAULT_WIDTH);

  function resize(e: MouseEvent) {
    const size = e.clientX;
    if (size >= SIDEBAR_MINIMUM_WIDTH && size <= SIDEBAR_MAXIMUM_WIDTH) {
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
    <>
      {show && isTablit && <Overlay />}

      <aside
        css={css`
          overflow-x: hidden;
          width: ${show ? sidebarWidth : 0}px;
          background-color: rgb(32, 32, 32);
          box-shadow: rgb(255 255 255 / 5%) -1px 0px 0px 0px inset;
          color: rgb(155, 155, 155);
          font-weight: 500;
          height: 100%;
          flex-shrink: 0;
          position: ${isTablit ? 'absolute' : 'relative'};
          top: 0;
          left: 0;
          z-index: 10;
        `}
      >
        <header
          css={css`
            padding: 14px;
            position: relative;
            overflow-x: visible;
          `}
        >
          <Link
            href="/"
            css={css`
              text-decoration: none;
              color: rgba(255, 255, 255, 0.81);
              font-weight: 500;
              font-size: 14px;
            `}
          >
            Coding Fairy
          </Link>
          <button
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              right: 5px;
              top: 10px;
              &:hover {
                opacity: 0.5;
              }
            `}
            onClick={() => setShowSidebar(false)}
          >
            <LeftChevronIcon />
          </button>
        </header>

        <SidebarList />

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
    </>
  );
}
