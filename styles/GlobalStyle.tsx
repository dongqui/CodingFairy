import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          font-family: 'Inter', 'Noto Sans KR', Arial, sans-serif;
          box-sizing: border-box;
          user-select: none;
          font-size: 1.2rem;
        }

        *:focus {
          outline: 0;
        }

        html {
          width: 100%;
          height: 100%;
          font-size: 10px;
        }

        body,
        #__next {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          background-color: rgb(25, 25, 25);
        }

        main {
          width: 100%;
          height: 100%;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}
    />
  );
}
