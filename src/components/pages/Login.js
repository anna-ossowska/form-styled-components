import React, { useState } from 'react';
import { PageLayout, Input, PasswordInput } from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });

  const onChangeInputHandler = (e) => {
    if (e.target.name === 'username')
      return setFormFields((prev) => ({ ...prev, username: e.target.value }));

    if (e.target.name === 'password')
      return setFormFields((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <PageLayout>
      <h2>Login</h2>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          type="text"
          value={formFields.username}
          onChange={onChangeInputHandler}
        />
        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={onChangeInputHandler}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
