import React from 'react';
import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background: white;
		min-height: 100vh;
		margin: 0;
		color: black;
    font-family: 'Kaushan Script', cursive;
	}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>test</h1>
      <Button primary>test</Button>
      <Button secondary>test</Button>
      <Button large>test 2</Button>
    </>
  );
}

export default App;
