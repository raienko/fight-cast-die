import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Button from 'src/components/Button';
import BackBtn from 'src/components/BackBtn';
import { createGame } from 'src/stores/game/actions';
import Slots from './Slots';
import MapSelection from './MapSelection';
import Header from './Header';
import Footer from './Footer';

export default function GameSetup() {
  const navigation = useNavigation();
  const back = () => navigation.pop();
  const start = () => createGame();

  return (
    <Screen>
      <Header>
        <BackBtn onPress={back} />
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
};
