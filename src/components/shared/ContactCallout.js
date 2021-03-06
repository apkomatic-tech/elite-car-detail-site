import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Wrapper from './Wrapper';
import { StyledButtonMain } from './Button';
import { StyledRow, StyledColumn } from './Grid';
import SplashBackgroundImage from '../../images/contact-callout-bg-splash.jpg';

const StyledCallout = styled.div`
  padding: 4rem 0;
  @media only screen and (max-width: 767px) {
    padding: 2rem 0;
  }
`;

const StyledCalloutWithBackground = styled(StyledCallout)`
  background-color: #111;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${SplashBackgroundImage});
  background-size: cover;
  background-position: center;
`;

const StyledCenter = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2rem 1.5rem;
  height: 100%;
  transition: background 300ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }

  h3 {
    margin-top: 0;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    flex: 1;
    margin-right: 1rem;
    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
`;

const columnSettings = {
  width: 2,
  spacing: 2
};

const ContactCallout = ({ noBackground }) => {
  const CalloutWrapper = noBackground ? StyledCallout : StyledCalloutWithBackground;

  return (
    <CalloutWrapper>
      <Wrapper>
        <StyledRow>
          <StyledColumn {...columnSettings}>
            <StyledCenter>
              <h3>Hours</h3>
              <p>
                Tue - Sat: <strong>8:30am - 6:00pm</strong>
              </p>
              <p>By Appointment Only</p>
              <ButtonGroup>
                <StyledButtonMain as="a" href="tel:+1-818-881-8410">
                  <FaPhone style={{ marginRight: '.5rem', verticalAlign: 'middle' }} /> Call Us
                </StyledButtonMain>
                <StyledButtonMain as="a" href="mailto:randy@elitedetailshop.com">
                  <FaEnvelope style={{ marginRight: '.5rem', verticalAlign: 'middle' }} /> Email Us
                </StyledButtonMain>
              </ButtonGroup>
            </StyledCenter>
          </StyledColumn>
          <StyledColumn {...columnSettings} style={{ paddingRight: 0 }}>
            <StyledCenter>
              <h3>Address</h3>
              <address>
                6924 Canby Ave., Ste. 110,
                <br />
                Reseda, CA 91335 <br />
                (Directly behind USA Fitness on Hart St.)
              </address>
            </StyledCenter>
          </StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn style={{ paddingRight: 0 }}>
            <StyledCenter>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.0390594475907!2d-118.5359765846252!3d34.19647841756229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2997f6558dcd7%3A0x23827ccfea014af2!2s6924+Canby+Ave+%23110%2C+Reseda%2C+CA+91335!5e0!3m2!1sen!2sus!4v1553808761791!5m2!1sen!2sus"
                width="300"
                height="300"
                frameBorder="0"
                style={{ border: 0, width: '100%' }}
                allowFullScreen
              />
            </StyledCenter>
          </StyledColumn>
        </StyledRow>
      </Wrapper>
    </CalloutWrapper>
  );
};

ContactCallout.propTypes = {
  noBackgroundImage: PropTypes.bool
};
ContactCallout.defaultProps = {
  noBackgroundImage: true
};

export default ContactCallout;
