import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${(props) => props.theme.secondaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotate} 0.8s linear infinite;
`;

export { Spinner };
