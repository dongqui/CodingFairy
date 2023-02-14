import { css } from '@emotion/react';

export default function Divider() {
  return (
    <div
      css={css`
        background-color: rgba(255, 255, 255, 0.13);
        height: 1px;
        margin: 6px 0;
      `}
    />
  );
}
