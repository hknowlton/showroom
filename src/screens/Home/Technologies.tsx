import React from 'react';

import { FlexRow, TechnologiesWrapper } from './styles';

export function Technologies() {
  return (
    <TechnologiesWrapper>
      <FlexRow>
        <img src="./react-logo.png" alt="react logo" />
        <img src="./typescript.png" alt="typescript logo" />
        <img src="./styled-components.png" alt="styled components logo" />
        <img
          src="./react-testing-library.png"
          alt="react testing library logo"
        />
        <img src="./git.png" alt="git logo" />
      </FlexRow>
    </TechnologiesWrapper>
  );
}
