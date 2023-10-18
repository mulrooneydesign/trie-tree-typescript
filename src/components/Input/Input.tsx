/** @jsxImportSource @emotion/react */
import React, { HTMLInputTypeAttribute } from 'react';
import { css } from '@emotion/react';

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  stateSetter: React.Dispatch<React.SetStateAction<string>>;
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

  ::placeholder {
    opacity: 0.5;
  }
`;

export default function Input({
  type,
  placeholder,
  stateSetter,
  value,
}: InputProps) {
  return (
    <input
      css={inputStyles}
      type={type}
      placeholder={placeholder}
      onChange={(e) => stateSetter(e.target.value)}
      value={value}
    />
  );
}
