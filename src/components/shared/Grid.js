import styled from 'styled-components';

function getWidth({ width }) {
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

function getGutter({ spacing }) {
  return spacing ? `${spacing}rem` : '3rem';
}

const StyledRow = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledColumn = styled.div`
  flex: 1;
  width: ${getWidth};
  margin-right: ${getGutter};
  @media only screen and (max-width: 767px) {
    margin-right: 0;
    width: 100%;
  }
`;

export { StyledColumn, StyledRow };
