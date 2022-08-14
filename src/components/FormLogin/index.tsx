import React, { useEffect, useState } from 'react';
import { TextInput } from '../TextInput';
import { Email } from '@styled-icons/material-outlined/Email';
import * as Styled from './styles';
import { Button } from '../Button';
import { parseCookies } from 'nookies';

export type FormLoginProps = {
  onLogin?: (email: string) => Promise<void>;
};

export const FormLogin = ({ onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lastAtPos = email.lastIndexOf('@');
  const lastDotPos = email.lastIndexOf('.');

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf('@@') == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      setError('Please provide a valid email');
      setLoading(false);
    }
    /* istanbul ignore else */
    if (onLogin) {
      if (email === '') {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }
      onLogin(email);
    }
  };

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    /* istanbul ignore next line */
    if (token) {
      setLoading(true);
    }
  }, []);
  return (
    <Styled.Wrapper>
      <TextInput
        name="user-identifier"
        label="Email"
        onInputChange={(val) => setEmail(val)}
        value={email}
        icon={<Email />}
        type="email"
        errorMessage={error}
      />
      <Styled.ButtonWrapper>
        <Button disabled={loading} type="submit" onClick={handleSubmit}>
          {loading ? 'Logging In' : 'Register'}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};
