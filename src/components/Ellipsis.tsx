import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Ellipsis({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
    >
      {children}
    </div>
  );
}
