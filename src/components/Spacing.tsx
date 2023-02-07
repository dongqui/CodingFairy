import { css } from '@emotion/react';

interface Props {
  size: number;
  direction?: 'height' | 'width';
}

export default function Spacing({ size, direction = 'height' }: Props) {
  const _css = `${direction}: ${size}px;`;

  return (
    <div
      css={css`
        ${_css}
      `}
    />
  );
}
