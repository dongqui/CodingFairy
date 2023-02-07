import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { useMediaQuery } from 'hooks';
import { MOBILE_WIDTH } from 'constant';

export default function Main({ children }: PropsWithChildren) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  const padding = isMobile ? 24 : 96;
  return (
    <main
      css={css`
        padding-left: calc(${padding}px + env(safe-area-inset-left));
        padding-right: calc(${padding}px + env(safe-area-inset-right));
        padding-top: 80px;
      `}
    >
      {children}
    </main>
  );
}
