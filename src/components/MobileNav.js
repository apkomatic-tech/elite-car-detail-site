import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const StyleMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  opacity: ${props => (props.isMenuOpen ? '1' : '0')};
  pointer-events: ${props => (props.isMenuOpen ? 'auto' : 'none')};
  z-index: 9999;

  transition: all 300ms ease;

  @media only screen and (min-width: 767px) {
    pointer-events: none;
    opacity: 0;
  }
`;

const StyledMenuContent = styled.div`
  color: #fff;
  padding: 1rem;
  max-width: 90%;
  margin: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  a,
  a:focus,
  a:hover {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const StyledCloseButton = styled.button`
  appearance: none;
  border: 0;
  color: #fff;
  background: transparent;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  z-index: 99999;
  top: 15px;
  right: 15px;
`;

function renderMenu(menuItem) {
  return (
    <li key={menuItem.id}>
      <Link to={menuItem.url}>{menuItem.title}</Link>
    </li>
  );
}

const MobileNav = ({ menu, isMenuOpen, onMenuClose }) => (
  <StyleMenuOverlay isMenuOpen={isMenuOpen}>
    <StyledCloseButton onClick={onMenuClose}>
      <FaTimes />
    </StyledCloseButton>
    <StyledMenuContent>
      <ul>{menu.map(renderMenu)}</ul>
    </StyledMenuContent>
  </StyleMenuOverlay>
);

export default MobileNav;
