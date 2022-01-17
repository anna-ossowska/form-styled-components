import React, { useState } from 'react';
import { PageLayout, Input } from 'components/common';
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
  return (
    <PageLayout>
      <h2>Login</h2>
      <Form>
        <Input name="username" placeholder="Username" type="text" />
        <Input name="password" placeholder="Password" type="password" />
      </Form>
    </PageLayout>
  );
};

export default Login;
