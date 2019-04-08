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
        color: #7c61ea;
      }
    }

    &:not(.nav-dropdown) {
      border-bottom: 3px solid transparent;
      &.active,
      &:hover,
      &:focus {
        border-color: #7c61ea;
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
      transform: translateY(0);
    }

    > ul {
      width: 100%;
      min-width: 195px;
      list-style: none;
      padding: 15px 25px;
      margin: 0;
      position: absolute;
      right: 0;
      top: 100%;
      transform: translateY(30px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);

      background-color: ${props => props.theme.colors.main};
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
      opacity: 0.01;
      pointer-events: none;
      transition: 220ms cubic-bezier(0.51, -0.02, 0.32, 1.07);
      border-radius: 4px;
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        right: 35px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid ${props => props.theme.colors.main};
      }
      li {
        margin-bottom: 1rem;
      }
      a {
        display: block;
        border-bottom: 1px;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        &:hover {
          color: #fff;
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
