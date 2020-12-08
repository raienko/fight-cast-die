import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Button from 'src/components/Button';
import Chat from './Chat';
import Slots from './Slots';
import MapSelection from './MapSelection';
import Tools from './Tools';
import Footer from './Footer';

export default function GameSetup() {
  const navigation = useNavigation();
  const back = () => navigation.pop();
  return (
    <Screen>
      <Button text="Back" onPress={back} />
      <MapSelection />
      <Slots />
      <Chat />
      <Footer>
        <Button text="Trade" />
        <Button text="Start" />
      </Footer>
      <Spinner visible={false} />
    </Screen>
  );
};
