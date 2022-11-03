import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: ${props => props.theme.space[0]}px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes.l};
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :active {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }
`;
