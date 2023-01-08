import { css } from '@emotion/react';

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
      `}
    >
      sidebar
    </aside>
  );
}
