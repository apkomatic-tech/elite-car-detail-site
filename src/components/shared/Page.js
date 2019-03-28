import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const StyledPageContent = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Page = ({ children }) => (
  <StyledPageContent>
    <Wrapper>{children}</Wrapper>
  </StyledPageContent>
);
export default Page;
