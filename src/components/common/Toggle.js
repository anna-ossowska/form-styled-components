import styled from 'styled-components';
import React from 'react';

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid black;
  margin: auto;
  margin-left: 1rem;
  display: flex;
  background: black;
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border-radius: 50%;
  border: 1px solid black;
  margin-top: 1px;
  background: white;
  transition: transform 0.1s linear;
  transform: translateX(${(props) => (props.isActive ? '26px' : '1px')});
`;

export const Toggle = ({ isActive }) => {
  return (
    <ToggleWrapper>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};
