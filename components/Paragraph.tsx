import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Paragraph({ children }: PropsWithChildren) {
  return (
    <p
      css={css`
        font-size: 1.6rem;
        line-height: 1.5;
      `}
    >
      {children}
    </p>
  );
}
