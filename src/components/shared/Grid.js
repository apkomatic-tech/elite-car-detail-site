import styled from 'styled-components';

function setWidth({ width }) {
  switch (width) {
    case 2:
      return '50%';
    case 3:
      return '33.33%';
    case 1:
    default:
      return '100%';
  }
}

function setGutter({ spacing }) {
  return spacing ? `${spacing}rem` : '3rem';
}

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledColumn = styled.div`
  flex: 0 0 ${setWidth};
  padding-right: ${setGutter};
  margin-bottom: 2rem;
  @media only screen and (max-width: 767px) {
    padding-right: 0;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export { StyledColumn, StyledRow };
