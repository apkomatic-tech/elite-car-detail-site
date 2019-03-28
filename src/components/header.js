import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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

const StyledNav = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  .nav-item {
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 0.85rem;

    > a {
      color: #fff;
      display: block;
      text-decoration: none;
      padding: 1rem;
      &.active,
      &:hover,
      &:focus {
        background: ${props => props.theme.colors.main};
      }
    }
  }

  .nav-dropdown {
    position: relative;
    z-index: 1;
    cursor: pointer;

    &:hover > ul {
      opacity: 1;
      pointer-events: auto;
    }

    > ul {
      min-width: 150px;
      list-style: none;
      padding: 15px 25px;
      margin: 0;
      position: absolute;
      left: 0;
      top: 100%;

      background-color: #fff;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
      opacity: 0.01;
      pointer-events: none;
      transition: 150ms ease;
      border-radius: 4px;
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        left: 25px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid #fff;
      }
      li {
        margin-bottom: 1rem;
      }
      a {
        display: block;
        border-bottom: 1px;
        color: #111;
        text-decoration: none;
        &:hover {
          color: ${props => props.theme.colors.main};
        }
      }
    }
  }
`;

const Header = ({ fixed }) => (
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
      <StyledNav as="ul" role="navigation">
        <li className="nav-item">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-item nav-dropdown">
          <Link to="/services">Services</Link>
          <ul>
            <li>
              <Link to="/services/detail">Detailing</Link>
            </li>
            <li>
              <Link to="/services/dent-removal">Dent Removal</Link>
            </li>
            <li>
              <Link to="/services/bumper-repair">Bumper Repair</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
      </StyledNav>
    </StyledHeaderWrapper>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
