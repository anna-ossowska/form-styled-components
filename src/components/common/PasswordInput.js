import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from 'components/common';
import { Input } from './Input';

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const PasswordInput = (props) => {
  const [showPassword, setshowPassword] = useState(false);

  return <PasswordInputStyled {...props} />;
};
