import React from 'react';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = {
  primaryColor: '#fdd54f',
  secondaryColor: '#7d7d7d',
};

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
