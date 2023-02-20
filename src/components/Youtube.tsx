import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export default function Youtube({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}
    >
      {children}
    </div>
  );
}
