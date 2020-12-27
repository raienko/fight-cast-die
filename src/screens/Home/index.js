import React from 'react';
import Spinner from 'src/components/Spinner';
import Screen from 'src/components/Screen';
import H1 from 'src/components/H1';
import navigation from 'src/navigation';
import Header from 'src/components/Header';
import SettingsBtn from 'src/components/SettingsBtn';
import Campaigns from './Campaigns';

export default function Home() {
  return (
    <Screen>
      <Header>
        <H1 text="app_name" />
        <SettingsBtn onPress={() => navigation.navigate('Settings')} />
      </Header>
      <Campaigns />
      <Spinner visible={false} />
    </Screen>
  );
}
