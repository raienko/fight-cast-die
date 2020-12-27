import React from 'react';
import Touchable from 'rn-units/components/Touchable';
import Icon from 'src/components/Icon';
import Spinner from 'src/components/Spinner';
import Screen from 'src/components/Screen';
import H1 from 'src/components/H1';
import navigation from 'src/navigation';
import Header from 'src/components/Header';
import Campaigns from './Campaigns';

export default function Home() {
  return (
    <Screen>
      <Header>
        <H1 text="app_name" />
        <Touchable onPress={() => navigation.navigate('Settings')}>
          <Icon font={Icon.fonts.AntDesign} name="setting" />
        </Touchable>
      </Header>
      <Campaigns />
      <Spinner visible={false} />
    </Screen>
  );
}
