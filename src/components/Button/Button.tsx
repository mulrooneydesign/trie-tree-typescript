/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  onClickHandler: () => void;
  text: string;
}

const buttonStyles = css`
  appearance: none;
  border-color: grey;
  border-radius: 0.25rem;
  border-style: solid;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color: grey;
  font-size: 1.235rem;
  height: 3rem;
  min-width: 3rem;
  outline: 0;
  padding-inline: 1rem;
  position: relative;

  ::placeholder {
    opacity: 1;
  }
`;

export default function Button({ onClickHandler, text }: ButtonProps) {
  return (
    <button css={buttonStyles} onClick={onClickHandler}>
      {text}
    </button>
  );
}
