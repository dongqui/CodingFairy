import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

interface Props {
  size: number;
}

export default function Indent({ children, size }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        padding-left: ${size}px;
      `}
    >
      {children}
    </div>
  );
}
