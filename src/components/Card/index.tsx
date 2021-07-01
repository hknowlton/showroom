import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  width: number;
  height: number;
  animateOnHover?: boolean;
};

export function Card({
  children,
  width,
  height,
  animateOnHover = false
}: Props) {
  return (
    <Wrapper animate={animateOnHover} width={width} height={height}>
      {children}
    </Wrapper>
  );
}
