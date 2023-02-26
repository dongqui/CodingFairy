import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface Props {}

export default function Paragraph({ children }: PropsWithChildren<Props>) {
  return typeof children === 'string' ? (
    <p
      css={css`
        font-size: 1.6rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.81);
        white-space: pre-wrap;
        margin: 0;
        strong {
          color: rgba(255, 255, 255, 0.81);
          font-size: 1.8rem;
          line-height: 1.5;
          font-weight: bolder;
        }
      `}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : (
    <p>{children}</p>
  );
}
