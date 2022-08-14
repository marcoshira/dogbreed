import React, { InputHTMLAttributes, useRef } from 'react';
import * as Styled from './styles';

export type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  onInputChange?: (value: string) => void;
  disabled?: boolean;
  errorMessage?: string;
  errorGreen?: boolean;
  value?: string;
  icon?: React.ReactNode;
  as?: 'input' | 'textarea';
  id?: string;
  reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  type = 'text',
  label,
  name,
  disabled = false,
  onInputChange,
  errorMessage = '',
  errorGreen = false,
  value = '',
  icon = '',
  as = 'input',
  id,
  reference = null,
}: TextInputProps) => {
  const inputRef = useRef(reference);

  const handleChange = () => {
    const value = inputRef.current.value;
    /* istanbul ignore else */
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <Styled.Wrapper id={id}>
      <Styled.InputWrapper errorMessage={errorMessage}>
        <Styled.Input
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          ref={inputRef}
          onChange={handleChange}
          placeholder={label}
          errorMessage={errorMessage}
          defaultValue={value}
          as={as}
          errorGreen={errorGreen}
        />
        <Styled.Label htmlFor={name} element={as}>
          {label}
        </Styled.Label>
        {!!icon && icon}
      </Styled.InputWrapper>

      {!!errorMessage && (
        <Styled.ErrorMessage errorGreen={errorGreen}>
          {errorMessage}
        </Styled.ErrorMessage>
      )}
    </Styled.Wrapper>
  );
};
