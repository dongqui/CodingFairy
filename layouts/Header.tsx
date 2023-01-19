import { css } from '@emotion/react';

import { Breadcrumb } from '../components';
import { useBreadCrumbItems } from '../hooks';

export default function Header() {
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
      <Breadcrumb items={breadcrumbItems} />
    </header>
  );
}
