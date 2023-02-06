import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {
  spacing?: number;
  direction?: 'row' | 'column';
}

export default function Stack({ spacing = 1, direction = 'row', children }: PropsWithChildren<Props>) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
        gap: ${spacing};
      `}
    >
      {children}
    </div>
  );
}
