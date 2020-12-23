import React from 'react';
import navigation from 'src/navigation';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Button from 'src/components/Button';
import BackBtn from 'src/components/BackBtn';
import {createGame} from 'src/stores/game/actions';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import H1 from 'src/components/H1';
import PartySlots from './PartySlots';

export default function PartySetup() {
  const back = () => navigation.back();
  const next = () => navigation.navigate('GameSetup');

  return (
    <Screen>
      <Header>
        <BackBtn onPress={back} />
        <H1 text="party.setup" />
      </Header>
      <PartySlots />
      <Footer>
        <Button text="Next" onPress={next} />
      </Footer>
      <Spinner visible={false} />
    </Screen>
  );
}
