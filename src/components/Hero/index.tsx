import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

export function Hero({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
