import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StyledButtonMain } from '../shared/Button';
import SplashBackgroundImage from '../../images/hero-splash.jpg';

const StyledHeroSplash = styled.div`
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${SplashBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .inner {
    width: 100%;
    padding: 3rem;
    max-width: ${props => props.theme.siteWidth};
    margin: auto;
    text-align: center;
  }

  h1 {
    font-family: 'Pacifico', sans-serif;
    margin: 0 0 1rem;
    color: #fff;
    font-size: 7rem;
    @media only screen and (max-width: 690px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 2.5rem;
    color: #fff;
    margin: 0;
    @media only screen and (max-width: 690px) {
      font-size: 2rem;
    }
  }
`;

const HeroSplash = ({ title }) => (
  <React.Fragment>
    <StyledHeroSplash>
      <section className="inner">
        <h1>{title}</h1>
        <p>Expert Auto Detailing</p>
        <StyledButtonMain as={Link} to="/services" style={{ marginTop: '2rem', maxWidth: '270px' }} large>
          See Our Services
        </StyledButtonMain>
      </section>
    </StyledHeroSplash>
  </React.Fragment>
);

HeroSplash.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeroSplash;
