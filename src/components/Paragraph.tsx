import { css } from '@emotion/react';
import { PropsWithChildren, Fragment } from 'react';

interface Props {
  stringToJSX?: boolean;
}

export default function Paragraph({ children, stringToJSX = true }: PropsWithChildren<Props>) {
  return (
    <p
      css={css`
        font-size: 1.6rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.81);
        white-space: pre-wrap;
      `}
    >
      {stringToJSX === true && typeof children === 'string' ? convertNewLineToJSX(children) : children}
    </p>
  );
}

function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : ''}
      {line}
    </Fragment>
  ));
}
