import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from 'components/common';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: ${(props) => props.theme.headerBackground};
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? 'block' : 'none')};
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => props.theme.headerBackground};
  background: ${(props) => props.theme.bodyBackgroundColor};

  @media only screen and (min-width: 768px) {
    display: flex;
    position: relative;
    background: none;
    left: initial;
    top: initial;
    width: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 4px;
    background: ${(props) => props.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.bodyFontColor};
  text-decoration: none;
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

export const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
};
