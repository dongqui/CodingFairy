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
        flex-shrink: 0;
        &:hover {
          background-color: rgba(255, 255, 255, 0.055);
        }
        border-radius: 3px;
      `}
    >
      <div
        css={css`
          ${isOpen && `transform: rotate(90deg);`};
          -webkit-transition: transform 0.4s;
          transition: transform 0.4s;
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
