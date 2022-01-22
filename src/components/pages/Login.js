import React, { useState, useEffect } from 'react';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common';
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

  .altText {
    text-align: center;
    margin: 10px 0;
    color: #7d7d7d;
    font-size: 0.9em;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeInputHandler = (e) => {
    if (e.target.name === 'username')
      return setFormFields((prev) => ({ ...prev, username: e.target.value }));

    if (e.target.name === 'password')
      return setFormFields((prev) => ({ ...prev, password: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (!timeout) return;

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageLayout>
      <h2>Login</h2>
      <Form onSubmit={submitHandler}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
        {!isLoading && (
          <>
            <div className="altText">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
