import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';

const globalTheme = {
  colors: {
    main: '#41337a',
    mainLight: '#5946a7'
  },
  siteWidth: '1110px'
};

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    background: #313131;
    color: #fff;

  }

`;

const Layout = ({ children, isLandingPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={globalTheme}>
        <div className="site">
          <GlobalStyle />
          <Header fixed={isLandingPage} siteTitle={data.site.siteMetadata.title} />
          <React.Fragment>{children}</React.Fragment>
          <Footer />
        </div>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isLandingPage: PropTypes.bool
};

Layout.defaultProps = {
  isLandingPage: false
};

export default Layout;
