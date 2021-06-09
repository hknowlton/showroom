import React from 'react'

import { Hero } from '../../components/Hero'

import { Header, SubHeader, FlexRow } from './styles'

export function Home() {
    return (
        <div> <Hero><FlexRow><Header>Hi, I'm Heather.</Header>
        <SubHeader>An aspiring home chef, wife, mother, and frontend software engineer.</SubHeader></FlexRow></Hero> </div>
    )
}