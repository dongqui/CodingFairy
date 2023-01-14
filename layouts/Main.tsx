import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return (
    <main
      css={css`
        padding-left: calc(96px + env(safe-area-inset-left));
        padding-right: calc(96px + env(safe-area-inset-right));
        padding-top: 80px;
      `}
    >
      {children}
    </main>
  );
}
