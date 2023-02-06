import { css } from '@emotion/react';

export default function Overlay() {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0%;
        right: 0;
        bottom: 0%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9;
      `}
    />
  );
}
