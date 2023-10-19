/** @jsxImportSource @emotion/react */
import React, { HTMLInputTypeAttribute } from 'react';
import { css } from '@emotion/react';

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChangeCallback: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const inputStyles = css`
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
  flex: 1;
  max-width: 100%;

  ::placeholder {
    opacity: 0.5;
  }

  :focus {
    border-color: #ffffff;
    outline: 2px solid #00fffb;
    filter: drop-shadow(0px 0px 3px #009dff);
    color: #1b1b1b;
  }
`;

export default function Input({
  type,
  placeholder,
  onChangeCallback,
  value,
}: InputProps) {
  return (
    <input
      css={inputStyles}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeCallback(e.target.value.trim())}
      value={value}
    />
  );
}
