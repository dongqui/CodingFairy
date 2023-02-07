import { css } from '@emotion/react';

import { Breadcrumb, MenuIcon } from 'components';
import { useBreadCrumbItems } from 'hooks';

interface Props {
  showMenu: boolean;
  isTablit: boolean;
  setShowSidebar: (show: boolean) => void;
}
export default function Header({ showMenu, setShowSidebar, isTablit }: Props) {
  const breadcrumbItems = useBreadCrumbItems();

  // TODO: mobile - border bottom
  return (
    <header
      css={css`
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 20px 0 18px;
        color: rgba(255, 255, 255, 0.81);
        border-bottom: ${isTablit ? `1px solid rgba(255, 255, 255, 0.55)` : ''};
        position: sticky;
        left: 0;
        right: 0;
        overflow: hidden;
      `}
    >
      {showMenu && (
        <>
          <button
            css={css`
              height: 16px;
            `}
            onClick={() => setShowSidebar(true)}
          >
            <MenuIcon />
          </button>
          {!breadcrumbItems.length && (
            <div
              css={css`
                text-decoration: none;
                color: rgba(255, 255, 255, 0.81);
                font-weight: 500;
                font-size: 14px;
                margin-left: 8px;
              `}
            >
              CodingFairy
            </div>
          )}
        </>
      )}
      <Breadcrumb items={breadcrumbItems} />
    </header>
  );
}
