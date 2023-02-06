import { css } from '@emotion/react';

import { Breadcrumb, MenuIcon } from 'components';
import { useBreadCrumbItems, useMediaQuery } from 'hooks';
import { TABLIT_WIDTH } from 'constant';

interface Props {
  showMenu: boolean;
  setShowSidebar: (show: boolean) => void;
}
export default function Header({ showMenu, setShowSidebar }: Props) {
  const breadcrumbItems = useBreadCrumbItems();

  return (
    <header
      css={css`
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 18px;
        color: rgba(255, 255, 255, 0.81);
      `}
    >
      {showMenu && (
        <button
          css={css`
            height: 16px;
          `}
          onClick={() => setShowSidebar(true)}
        >
          <MenuIcon />
        </button>
      )}
      <Breadcrumb items={breadcrumbItems} />
    </header>
  );
}
