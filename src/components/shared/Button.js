import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  padding: ${props => (props.large ? '1.25rem' : '1rem')};
  text-align: center;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.6rem;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};
  text-decoration: none;
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
  box-shadow: 4px 4px 0 0 ${props => props.theme.colors.mainLight};
  transition: box-shadow 300ms ease;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 0 0 ${props => props.theme.colors.mainLight};
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
