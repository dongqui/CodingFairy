import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
      `}
    >
      {children}
    </div>
  );
}
