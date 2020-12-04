import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Button from 'src/components/Button';
import Chat from './Chat';
import Players from './Players';
import Maps from './Maps';
import Tools from './Tools';

export default function GameSetup() {
  const navigation = useNavigation();
  const back = () => navigation.pop();
  return (
    <Screen>
      <Button text="Back" onPress={back} />
      <Maps />
      <Players />
      <Chat />
      <Tools />
      <Button text="Start" />
      <Spinner visible={false} />
    </Screen>
  );
};
