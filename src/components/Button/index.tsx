import React, { HTMLProps } from 'react';

import { ButtonStyles } from './styles'

type Props = {
    text: string;
    loadingText?: string;
    isLoading?: boolean;
    disabled?: boolean;
  } & HTMLProps<HTMLButtonElement>;

  export function Button({text, loadingText, isLoading, disabled}: Props) {
      return ( 
          <ButtonStyles>
              {text}
          </ButtonStyles>
      )
  }