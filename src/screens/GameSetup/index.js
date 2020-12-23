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
import Slots from './Slots';
import MapSelection from './MapSelection';

export default function GameSetup() {
  const back = () => navigation.back();
  const start = () => createGame();

  return (
    <Screen>
      <Header>
        <BackBtn onPress={back} />
        <H1 text="game.setup" />
      </Header>
      <MapSelection />
      <Slots />
      <Footer>
        <Button text="Trade" />
        <Button text="Start" onPress={start} />
      </Footer>
      <Spinner visible={false} />
    </Screen>
  );
}
