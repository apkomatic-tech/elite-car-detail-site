import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Page from '../components/shared/Page';
import Collapsible from '../components/Collapsible';
import Image from '../images/detail-info-splash.jpg';
import SplashBanner from '../components/SplashBanner';

export default () => (
  <Layout>
    <SEO title="Detailing Info" />
    <SplashBanner
      heading="Detailing Info"
      text="The detailing products we use are among the best in the industry. All work is performed by professionally
          trained technicians. We truly enjoy what we do and take great pride in our work!"
      bgImage={Image}
    />
    <Page>
      <Collapsible heading="Exterior Detailing Service">
        <p>The Complete Exterior Detailing process:</p>
        <ul>
          <li>In depth preparation wash</li>
          <li>Tires & wheels meticulously cleaned and polished</li>
          <li>Road tar and grime is carefully removed from lower body panels & door jambs</li>
          <li>Auto Magic® clay bar process is performed to remove surface contamination</li>
          <li>
            High speed or orbital buffer is used with a non abrasive polish to remove oxidation and surface scratches
            while enhancing the depth and luster of your paint
          </li>
          <li>Intricate areas are polished by hand</li>
          <li>A high quality long lasting wax is applied and removed by hand</li>
          <li>Chrome, glass, moldings & trim are polished and dressed</li>
          <li>
            Final wipe down and detail brushing of all those little crevices. This final step is vital. Leaving wax and
            streaks behind can ruin an otherwise great job.
          </li>
        </ul>
      </Collapsible>

      <Collapsible heading="Interior Detailing">
        <p>The Complete Interior Detailing process:</p>
        <ul>
          <li> Remove loose items and thoroughly vacuum top to bottom including the trunk</li>
          <li>Seats, door panels & dash are meticulously cleaned non-aggressively</li>
          <li>
            Carpets and Upholstery are shampooed using a professional steam machine. Steam is safer on your fabrics and
            also kills bacteria.
          </li>
          <li>We shine your glass and window tinting with ammonia free glass cleaner</li>
          <li>Another vacuum and final wipe down of wood dashes, vents and buttons</li>
          <li>Low ph cleaners are used to keep all of your finishes looking original</li>
          <li>No shiny or gooey products will be applied</li>
          <li>Out of concern for our allergy suffering customers we do not use any scented air fragrances</li>
        </ul>
      </Collapsible>

      <Collapsible heading="Mini Detail *">
        <p>
          * <em>For vehicles in fair condition</em>
        </p>
        <ul>
          <li>A complete hand wash</li>
          <li>Tires & wheels meticulously cleaned and polished</li>
          <li>Road tar and grime is carefully removed from lower body panels & door jambs</li>
          <li>
            Auto Magic® clay bar process is performed to remove surface contamination • Intricate areas are polished by
            hand
          </li>
          <li>A high quality long lasting wax is applied and removed by hand</li>
          <li>Chrome, glass, moldings & trim are polished and dressed</li>
          <li>Final wipe down and detail brushing of all those little crevices</li>
        </ul>
      </Collapsible>

      <Collapsible heading="Hand Car Washing">
        <p>Not Just a Wash!</p>
        <ul>
          <li>Delicate hand wash of the exterior including a spray wax</li>
          <li>Detailed Wheel and tire treatment</li>
          <li>Hand drying and blow drying to ensure no annoying drips</li>
          <li>Glass cleaned inside and out</li>
          <li>Tires are dressed</li>
          <li>Interior is lightly cleaned , all leather, seats, dash, doors and plastic pieces</li>
          <li>Interior is vacuumed thoroughly including the trunk</li>
          <li>
            We wash your car from a detailers
            {"'"} perspective
          </li>
        </ul>
      </Collapsible>

      <Collapsible heading="Overspray Removal">
        <p>
          Beware - there are many methods of removing overspray. Some are not so good for your paint down the road. Come
          and see us. We are paint overspray removal experts!
        </p>
        <ul>
          <li>Over 35 years of overspray removal experience</li>
          <li>Our safe, non-abrasive methods ensure no additional damage to your vehicle</li>
          <li>Your Paint, Glass and Chrome will come out as good as new</li>
          <li>We may recommend replacing some platic or rubber trim</li>
        </ul>
      </Collapsible>
      <Collapsible heading="Waterspot Removal">
        <ul>
          <li>Heavy calcium deposits can cause permanent damage to your paint finish and clear coat</li>
          <li>Solids are left behind on your paint surface once water evaporates</li>
          <li>Water spots can stain or etch your paint clear coat</li>
          <li>Acid rain can cause permanent damage to your paint clear coat</li>
          <li>We have fixed many water spotted car over the years</li>
          <li>Come on in and we will give you a free quote on the spot!</li>
        </ul>
      </Collapsible>
    </Page>
  </Layout>
);
