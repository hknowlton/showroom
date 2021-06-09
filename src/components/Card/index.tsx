import React, { ReactNode } from 'react'
 
import { Wrapper } from './styles'

type Props = {
    children: ReactNode
}

export function Card({children}: Props) {
return (
    <Wrapper>
        {children}
    </Wrapper>
)
}