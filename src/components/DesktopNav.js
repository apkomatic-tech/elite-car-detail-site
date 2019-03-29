import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 767px) {
    display: none;
  }

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

function renderSubmenu(submenu) {
  return submenu.map(sub => (
    <li key={sub.id}>
      <Link to={sub.url}>{sub.title}</Link>
    </li>
  ));
}

const DesktopNav = ({ menu }) => (
  <StyledNav as="ul" role="navigation">
    {menu.map(menuItem => {
      const { url, title, id, submenu } = menuItem;

      return (
        <li key={id} className={`nav-item${submenu ? ' nav-dropdown' : ''}`}>
          <Link to={url} activeClassName="active">
            {title}
          </Link>
          {submenu && <ul>{renderSubmenu(submenu)}</ul>}
        </li>
      );
    })}
  </StyledNav>
);

export default DesktopNav;
