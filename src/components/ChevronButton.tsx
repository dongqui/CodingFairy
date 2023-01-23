import { css } from '@emotion/react';

import { ChevronIcon } from '.';

interface Props {
  onClick: React.MouseEventHandler;
  isOpen: boolean;
}

export default function ChevronButton({ onClick, isOpen }: Props) {
  return (
    <button
      onClick={onClick}
      css={css`
        background-color: transparent;
        outline: none;
        border: none;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: red;
        }
        border-radius: 3px;
      `}
    >
      <div
        css={css`
          ${isOpen && `transform: rotate(90deg);`};
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <ChevronIcon />
      </div>
    </button>
  );
}
