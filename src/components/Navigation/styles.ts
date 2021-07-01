import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../utils/theme';

export const Wrapper = styled.div`
  max-width: 800px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  text-transform: uppercase;
  color: ${theme.main.blue.primary};
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
