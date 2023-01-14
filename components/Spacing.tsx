import { css } from '@emotion/react';

interface Props {
  size: number;
}

export default function Spacing({ size }: Props) {
  return (
    <div
      css={css`
        height: ${size};
      `}
    />
  );
}
