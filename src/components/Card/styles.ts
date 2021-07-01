import styled from 'styled-components';

import theme from '../../utils/theme';

export const Wrapper = styled.div<{
  width: number;
  height: number;
  animate: boolean;
}>`
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  padding: 1rem;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transition: ease all 0.3s;

  &:hover {
    cursor: pointer;
    height: ${props => props.width + 10}px;
    width: ${props => props.height + 10}px;
  }
`;
