import { css } from '@emotion/react';

interface Props {
  src: string;
}

export default function Youtube({ src }: Props) {
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
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
