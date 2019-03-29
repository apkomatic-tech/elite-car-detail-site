import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import menuJSON from '../data/menu.json';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const StyledHeader = styled.header`
  background: ${props => (props.fixed ? 'transparent' : '#111')};
  position: ${props => (props.fixed ? 'absolute' : 'static')};
  width: 100%;
  left: 0;
  right: 0;

  .logo {
    margin: 0;
    font-size: 4rem;
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      > span {
        display: inline-block;
        height: 100%;
      }
      .p1 {
        font-family: 'Pacifico', sans-serif;
        margin-right: 1rem;
      }
      .p2 {
        padding: 0.2rem 0.6rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 0.1em;
        background: ${props => props.theme.colors.main};
      }
    }
  }
`;

const StyledHeaderWrapper = styled.div`
  max-width: ${props => props.theme.siteWidth};
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavToggle = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

const Header = ({ fixed }) => {
  const [menuOpen, setMenu] = useState(false);

  function closeMenu() {
    setMenu(false);
  }

  function openMenu() {
    setMenu(true);
  }

  return (
    <StyledHeader fixed={fixed}>
      <StyledHeaderWrapper>
        <h1 className="logo">
          <Link to="/">
            <span className="p1">Elite</span>
            <span className="p2">
              Detail
              <br />
              Shop
            </span>
          </Link>
        </h1>
        <StyledNavToggle onClick={openMenu}>
          <FaBars />
        </StyledNavToggle>
        <DesktopNav menu={menuJSON} />
        <MobileNav menu={menuJSON} isMenuOpen={menuOpen} onMenuClose={closeMenu} />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
