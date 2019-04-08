import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Page from '../components/shared/Page';
import ContactCallout from '../components/shared/ContactCallout';

export default () => (
  <Layout>
    <SEO title="Contact Us" />
    <Page>
      <ContactCallout noBackground />
    </Page>
  </Layout>
);
