import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Page from '../components/shared/Page';
import { StyledRow, StyledColumn } from '../components/shared/Grid';
import RandyImage from '../images/randy.jpg';
import AboutImage from '../images/about-image.jpg';
import SplashBanner from '../components/SplashBanner';

export default () => (
  <Layout>
    <SEO title="About Us" />
    <SplashBanner
      heading="About Us"
      text={`Established in 1979. For over 30 years Elite has maintained a professional auto detailing service second to
            none. "LA Magazine says we are one of the best"`}
      bgImage={AboutImage}
    />
    <Page>
      <h1>About Us</h1>
      <p>
        The personal attention given to each customer is a genuine priority. Many of our clientele have been utilizing
        our services for 20 to 30 years. We have persevered for over three decades and continue to provide high quality
        vehicle refurbishing services for private individuals. No high volume wholesale work done here. Repeat business
        and word of mouth advertising is how we achieved our outstanding reputation. Today Elite is one of the premier
        auto detailing shops in the Los Angeles area. We are one of the few remaining freestanding detail shops around.
        The amount of experience we have absorbed through the years in auto polishing and waxing is unparalleled. Great
        value has always been our motto. You will receive a great value on any of our services. From dent removal or
        bumper repair to buffing or waxing,
      </p>
      <StyledRow>
        <StyledColumn width={2}>
          <h1>About Owner</h1>
          <p>
            Where do I begin? It was a summer day in 1979 and the birds were singing. Well, not exactly. Elite really
            began from a passion for beautiful cars. Who else would do such a labor of love? I always loved cars. Big
            cars small cars it really didn't matter. Of course I had my favorites but I just loved cars. In 1977 I was
            referred to a detail shop by a friend of mine. I absolutely loved the guys that detailed my cars. They
            transformed my car into a thing of beauty. The depth, the gloss I had never seen my car look like that
            before. I appreciated their enthusiasm towards the work they did as well as how they treated their
            customers. After patronizing their shop for a couple of years I decided to emulate them, and start a detail
            business of my own.
          </p>
        </StyledColumn>
        <StyledColumn width={2}>
          <img src={RandyImage} alt="About Us" />
        </StyledColumn>
      </StyledRow>
    </Page>
  </Layout>
);
