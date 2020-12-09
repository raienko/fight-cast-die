import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Button from 'src/components/Button';
import Chat from './Chat';
import Slots from './Slots';
import MapSelection from './MapSelection';
import Header from './Header';
import Footer from './Footer';

export default function GameSetup() {
  const navigation = useNavigation();
  const back = () => navigation.pop();
  return (
    <Screen>
      <Header>
        <Button text="Back" onPress={back} />
      </Header>
      <MapSelection />
      <Slots />
      <Footer>
        <Button text="Trade" />
        <Button text="Start" />
      </Footer>
      <Spinner visible={false} />
    </Screen>
  );
};
