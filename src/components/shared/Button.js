import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  padding: ${props => (props.large ? '1.5rem 2rem' : '1rem')};
  text-align: center;
  cursor: pointer;
  font-size: ${props => (props.large ? '1.8rem' : '1.6rem')};
  line-height: 1.5;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};
  text-decoration: none;
  border-radius: 4px;
  & > * {
    vertical-align: middle;
  }
`;

function mainColor(props) {
  return props.theme.colors.main;
}

const StyledButtonMain = styled(StyledButton)`
  background-color: ${mainColor};
  color: #fff;
  border: 1px solid ${mainColor};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 300ms ease;
  &:hover,
  &:focus {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  }
`;

const StyledButtonTransparent = styled(StyledButton)`
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  transition: 300ms ease;
  &:hover,
  &:focus {
    background-color: ${mainColor};
    border-color: ${mainColor};
    color: #fff;
  }
`;

export { StyledButtonTransparent, StyledButtonMain };
