import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import Wrapper from '../shared/Wrapper';
import { StyledButtonMain } from '../shared/Button';
import { StyledRow, StyledColumn } from '../shared/Grid';
import CarWashImage from '../../images/services-car-wash.jpg';
import DetailImage from '../../images/services-detail.jpg';
import DentRemovalImage from '../../images/services-dent-removal.jpg';

const StyledServicesWrapper = styled.div`
  margin: 3rem 0;
  h1 {
    margin: 0 0 3rem;
  }
`;

const StyledServiceBucket = styled.div`
  background: rgba(255, 255, 255, 0.1);
  transition: 500ms ease;
  &:hover {
    transform: translateY(1%);
  }

  &:hover .header img {
    transform: scale(1.4) rotate(5deg);
  }

  .header {
    overflow: hidden;
    img {
      display: block;
      transition: 500ms ease;
    }
  }
  .content {
    padding: 2rem;
  }
  .footer {
    padding: 0 2rem 3rem 2rem;
  }
`;

const HeroServices = () => (
  <Wrapper>
    <StyledServicesWrapper>
      <h1>Our Services</h1>
      <StyledRow>
        <StyledColumn width={3}>
          <StyledServiceBucket>
            <div className="header">
              <img src={CarWashImage} alt="Car Wash" />
            </div>
            <div className="content">
              <h3>Car Wash</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam expedita itaque. Itaque placeat
                earum dicta nam consectetur eius quae, veniam reiciendis aperiam vitae quod magnam at, ad voluptatum
                adipisci?
              </p>
            </div>
            <div className="footer">
              <StyledButtonMain block as={Link} to="/services/car-wash">
                Learn More <FaChevronRight />
              </StyledButtonMain>
            </div>
          </StyledServiceBucket>
        </StyledColumn>
        <StyledColumn width={3}>
          <StyledServiceBucket>
            <div className="header">
              <img src={DetailImage} alt="Car Detailing" />
            </div>
            <div className="content">
              <h3>Detailing</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam expedita itaque. Itaque placeat
                earum dicta nam consectetur eius quae, veniam reiciendis aperiam vitae quod magnam at, ad voluptatum
                adipisci?
              </p>
            </div>
            <div className="footer">
              <StyledButtonMain block as={Link} to="/services/car-detail">
                Learn More <FaChevronRight />
              </StyledButtonMain>
            </div>
          </StyledServiceBucket>
        </StyledColumn>
        <StyledColumn width={3}>
          <StyledServiceBucket>
            <div className="header">
              <img src={DentRemovalImage} alt="Car Dental removal" />
            </div>
            <div className="content">
              <h3>Dent Removal</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam expedita itaque. Itaque placeat
                earum dicta nam consectetur eius quae, veniam reiciendis aperiam vitae quod magnam at, ad voluptatum
                adipisci?
              </p>
            </div>
            <div className="footer">
              <StyledButtonMain block as={Link} to="/services/dent-removal">
                Learn More <FaChevronRight />
              </StyledButtonMain>
            </div>
          </StyledServiceBucket>
        </StyledColumn>
      </StyledRow>
    </StyledServicesWrapper>
  </Wrapper>
);

export default HeroServices;
