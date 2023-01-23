import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

interface Props {
  gap?: number;
}

export default function FlexRow({ children, gap = 8 }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: ${gap}px;
      `}
    >
      {children}
    </div>
  );
}
