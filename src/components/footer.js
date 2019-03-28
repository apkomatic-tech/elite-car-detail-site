import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wrapper from './shared/Wrapper';
import { StyledRow, StyledColumn } from './shared/Grid';

const StyledFooter = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

const StyledFooterNav = styled.div`
  padding: 3rem 1rem;
  @media only screen and (max-width: 690px) {
    padding: 2rem 1rem;
  }
  h3 {
    color: #fff;
    margin: 0 0 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 0.5rem;
    > a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
  }
`;

const StyledFooterLegal = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const renderFooterContent = () => (
  <Wrapper>
    <StyledRow>
      <StyledColumn w={3}>
        <StyledFooterNav>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </StyledFooterNav>
      </StyledColumn>
      <StyledColumn w={3}>
        <StyledFooterNav>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </StyledFooterNav>
      </StyledColumn>
      <StyledColumn w={3}>
        <StyledFooterNav>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </StyledFooterNav>
      </StyledColumn>
    </StyledRow>
    <StyledFooterLegal>
      {' '}
      &copy;
      {new Date().getFullYear()} All Rights Reserved
    </StyledFooterLegal>
  </Wrapper>
);

const Footer = () => <StyledFooter>{renderFooterContent()}</StyledFooter>;

export default Footer;
