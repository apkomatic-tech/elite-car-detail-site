import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagram, FaYelp } from 'react-icons/fa';
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
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.6rem;
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
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
  }

  .social-icons {
    li {
      display: inline-block;
      margin-right: 1rem;
      font-size: 3rem;

      svg {
        transition: fill 200ms ease;
        &:hover {
          fill: #fff;
        }
      }
    }
  }
`;

const StyledFooterLegal = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
`;

const renderFooterContent = () => (
  <Wrapper>
    <StyledRow>
      <StyledColumn width={3}>
        <StyledFooterNav>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </StyledFooterNav>
      </StyledColumn>
      <StyledColumn width={3}>
        <StyledFooterNav>
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/services/dent-removal">Dent Removal</Link>
            </li>
            <li>
              <Link to="/services/bumper-repair">Bumper Repair</Link>
            </li>
            <li>
              <Link to="/services/wheel-repair">Wheel Repair</Link>
            </li>
            <li>
              <Link to="/services/headlight-restoration">Headlight Restoration</Link>
            </li>
            <li>
              <Link to="/services/glass-repair">Glass Repair</Link>
            </li>
          </ul>
        </StyledFooterNav>
      </StyledColumn>
      <StyledColumn width={3}>
        <StyledFooterNav>
          <h3>Social</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.yelp.com">
                <FaYelp />
              </a>
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
