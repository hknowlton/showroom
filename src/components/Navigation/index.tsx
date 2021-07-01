import React from 'react';

import { Wrapper, NavItem, StyledLink } from './styles';

export function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/">
        <NavItem>home</NavItem>
      </StyledLink>
      <StyledLink to="/contact">
        <NavItem>contact</NavItem>
      </StyledLink>
    </Wrapper>
  );
}
