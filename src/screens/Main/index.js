import React from 'react';
import navigation from 'src/navigation';
import Spinner from 'src/components/Spinner';
import Wrapper from './Wrapper';
import MyStats from './MyStats';
import Controls from './Controls';
import Campaigns from './Campaigns';
import Achievements from './Achievements';
import FriendsOnline from './FriendsOnline';

export default function Main() {
  return (
    <Wrapper>
      <MyStats />
      <Achievements />
      <Campaigns />
      <Controls />
      <FriendsOnline onPress={() => navigation.navigate('Friends')} />
      <Spinner visible={false} />
    </Wrapper>
  );
}
