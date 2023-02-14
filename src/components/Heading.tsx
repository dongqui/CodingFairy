import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Heading({ level, children }: PropsWithChildren<Props>) {
  switch (level) {
    case 1:
      return (
        <h1
          css={css`
            font-size: 4rem;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.81);
          `}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          css={css`
            font-size: 2.4rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.81);
          `}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h2
          css={css`
            font-size: 2rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.81);
          `}
        >
          {children}
        </h2>
      );
    default:
      return null;
  }
}
