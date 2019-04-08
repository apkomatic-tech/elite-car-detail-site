import React from 'react';
import styled from 'styled-components';

const StyledSplash = styled.div`
  align-items: center;
  background-color: #222;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 350px;
  padding: 3rem 2rem;
  .inner {
    border: 1px solid rgba(255, 255, 255, 0.5);
    margin: auto;
    max-width: ${props => props.theme.siteWidth};
    padding: 3rem 1.65rem 2rem 1.65rem;
    position: relative;
    z-index: 1;

    h1 {
      background: #fff;
      color: #111;
      font-size: 3rem;
      left: 15px;
      line-height: 1;
      margin: 0;
      padding: 1rem 2rem;
      position: absolute;
      top: -2.7rem;
      z-index: 3;
      border-radius: 2px;
    }
    p {
      font-size: 1.7rem;
    }
  }
`;

const SplashBanner = ({ heading, text, bgImage }) => (
  <StyledSplash bgImage={bgImage}>
    <div className="inner">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  </StyledSplash>
);

export default SplashBanner;
