import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSplash from '../components/home';
import ContactCallout from '../components/shared/ContactCallout';

const IndexPage = () => (
  <Layout isLandingPage>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroSplash title="Elite Motocar Detail" text="Professional, High-Quality, and Affordable Car Detail Service." />
    <ContactCallout />
  </Layout>
);

export default IndexPage;
