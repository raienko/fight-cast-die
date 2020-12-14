import React from 'react';
import navigation from 'src/navigation';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Screen from 'src/components/Screen';
import SearchBar from 'src/components/SearchBar';
import BackBtn from 'src/components/BackBtn';
import H1 from 'src/components/H1';

export default function Friends() {
  return (
    <Screen>
      <Header>
        <BackBtn onPress={navigation.back} />
        <H1 text="friends.heading" />
      </Header>
      <SearchBar />
      <Footer />
    </Screen>
  );
}
