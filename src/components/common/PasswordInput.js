import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  padding-left: 3px;
`;

const ToggleButton = styled.div`
  cursor: pointer;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  user-select: none;
  color: black;
  width: 70px;
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const clickToggleButtonHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={clickToggleButtonHandler}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <Text>{showPassword ? props.value : ''}</Text>
    </>
  );
};
