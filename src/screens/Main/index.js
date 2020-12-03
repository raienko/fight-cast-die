import React from 'react';
import Spinner from 'src/components/Spinner';
import Wrapper from './Wrapper';
import MyStats from './MyStats';
import Controls from './Controls';
import Campaigns from './Campaigns';
import Achievements from './Achievements';

export default function Main() {
  return (
    <Wrapper>
      <MyStats />
      <Achievements />
      <Campaigns />
      <Controls />
      <Spinner visible={false} />
    </Wrapper>
  );
}
