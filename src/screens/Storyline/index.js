import React from 'react';
import Spinner from 'src/components/Spinner';
import Screen from 'src/components/Screen';
import H1 from 'src/components/H1';
import Header from 'src/components/Header';
import Campaigns from './Campaigns';

export default function Storyline() {
  return (
    <Screen>
      <Header>
        <H1 text="storyline.title" />
      </Header>
      <Campaigns />
      <Spinner visible={false} />
    </Screen>
  );
}
