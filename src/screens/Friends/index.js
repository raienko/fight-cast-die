import React from 'react';
import {} from 'react-native';
import navigation from 'src/navigation';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Screen from 'src/components/Screen';
import SearchBar from 'src/components/SearchBar';
import BackBtn from 'src/components/BackBtn';
import H1 from 'src/components/H1';
import Button from 'src/components/Button';
import List from 'src/components/List';
import {share} from 'src/utils/helpers';

export default function Friends() {
  const friends = [];
  return (
    <Screen>
      <Header>
        <BackBtn onPress={navigation.back} />
        <H1 text="friends.heading" />
      </Header>
      <SearchBar />
      <List data={friends} />
      <Footer>
        <Button text="button.invite" onPress={() => share('Hello world')} />
      </Footer>
    </Screen>
  );
}
