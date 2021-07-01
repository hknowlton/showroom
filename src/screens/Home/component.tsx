import React from 'react';

import { Hero } from '../../components/Hero';
import { Navigation } from '../../components/Navigation';
import { Card } from '../../components/Card';

import { Technologies } from './Technologies';
import {
  Header,
  SubHeader,
  FlexRow,
  FlexColumn,
  PhotoWrapper,
  Projects
} from './styles';

export function Home() {
  return (
    <div>
      <Navigation />
      <Hero>
        <div>
          <FlexRow>
            <FlexColumn>
              <Header>Hi, I'm Heather.</Header>
              <SubHeader>
                An aspiring home chef, wife, <br />
                mother, and frontend software engineer.
              </SubHeader>
            </FlexColumn>
            <PhotoWrapper>
              <img src="./avatar.png" alt="heather" />
            </PhotoWrapper>
          </FlexRow>
        </div>
      </Hero>
      <Technologies />
      <Projects>
        <FlexRow>
          <Card width={400} height={400}>
            project #1
          </Card>
          <Card width={400} height={400}>
            project #2
          </Card>
        </FlexRow>
        <FlexRow>
          <Card width={400} height={400}>
            project #3
          </Card>
          <Card width={400} height={400}>
            project #4
          </Card>
        </FlexRow>
      </Projects>
    </div>
  );
}
