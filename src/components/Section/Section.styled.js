import styled from 'styled-components';

export const Sec = styled.section`
  display: block;
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  font-size: ${props => props.theme.fontSizes.l};
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]}px;
  margin-top: ${props => props.theme.space[0]}px;
`;
