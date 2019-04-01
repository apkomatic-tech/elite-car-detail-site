import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { StyledButtonMain } from '../shared/Button';
import SplashBackgroundImage from '../../images/hero-splash.jpg';

const StyledTyped = styled.span`
  white-space: pre;
  display: inline-block;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 3px;
    background: #fff;
    font-style: italic;
  }
`;
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
    font-size: 3rem;
    color: #fff;
    margin: 0;
    @media only screen and (max-width: 690px) {
      font-size: 2.5rem;
    }
  }
`;

const HeroSplash = ({ title, text }) => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      typeSpeed: 50,
      backSpeed: 50,
      strings: ['scratch removal', 'dent removal', 'bumper repair', 'interior detail', 'auto detail']
    };

    const t = new Typed(typedElement.current, options);
    return () => {
      t.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <StyledHeroSplash>
        <section className="inner">
          <h1>{title}</h1>
          <p>
            We offer high quality <StyledTyped ref={typedElement} />
          </p>
          <StyledButtonMain style={{ marginTop: '2rem', maxWidth: '270px' }} large as="a">
            Check Out Our Services
          </StyledButtonMain>
        </section>
      </StyledHeroSplash>
    </React.Fragment>
  );
};

export default HeroSplash;
