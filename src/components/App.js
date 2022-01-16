import React from 'react';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
