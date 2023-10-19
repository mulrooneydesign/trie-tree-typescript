/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  onClickHandler: () => void;
  text: string;
}

const buttonStyles = css`
  appearance: none;
  border-color: #ff0062;
  border-radius: 0.25rem;
  border-style: solid;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color: white;
  background: #ff0062;
  font-size: 1.235rem;
  height: 3rem;
  outline: 0;
  padding-inline: 1rem;
  position: relative;
  min-width: fit-content;

  ::placeholder {
    opacity: 1;
  }

  :hover {
    color: white;
    background: #800132;
    border-color: #800132;
    cursor: pointer;
  }

  :active {
    color: white;
    background: #ff0062;
    border-color: #ff0062;
    filter: drop-shadow(0px 0px 10px #ff0062);
  }
`;

export default function Button({ onClickHandler, text }: ButtonProps) {
  return (
    <button css={buttonStyles} onClick={onClickHandler}>
      {text}
    </button>
  );
}
