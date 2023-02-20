import _Image from 'next/image';
import { css } from '@emotion/react';

interface Props extends React.ComponentProps<typeof _Image> {}

export default function Image({ src, alt }: Props) {
  return (
    <_Image
      src={src}
      alt={alt}
      placeholder="blur"
      css={css`
        width: 100%;
        height: auto;
      `}
    />
  );
}
