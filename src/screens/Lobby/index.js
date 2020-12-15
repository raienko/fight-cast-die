import React from 'react';
import {useNavigation} from '@react-navigation/native';
import H1 from 'src/components/H1';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MyStats from './MyStats';
import Achievements from './Achievements';
import Controls from './Controls';

export default function Lobby() {
  const navigation = useNavigation();
  return (
    <Screen>
      <Header>
        <H1 text="lobby.title" />
      </Header>
      <MyStats />
      <Achievements />
      <Controls />
      <Footer>
        <Button text="search" onPress={() => navigation.navigate('PartySetup')} />
      </Footer>
    </Screen>
  );
};
