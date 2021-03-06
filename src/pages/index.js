import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSplash from '../components/home';
import ContactCallout from '../components/shared/ContactCallout';
import HeroServices from '../components/home/HeroServices';

const IndexPage = () => (
  <Layout isLandingPage>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroSplash title="Elite Motorcar Polishing" />
    <ContactCallout />
    <HeroServices />
  </Layout>
);

export default IndexPage;
