import React from 'react';

interface InputProps {
  placeholder: string;
  type: 'text' | 'number' | 'email';
  stateSetter: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export default function Input({
  type,
  placeholder,
  stateSetter,
  value,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => stateSetter(e.target.value)}
      value={value}
    />
  );
}
