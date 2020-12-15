import React from 'react';
import Header from 'src/components/Header';
import H1 from 'src/components/H1';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import * as storeActions from 'src/stores/global/actions';

export default () => {
  const logout = () => {
    storeActions.logout();
  };

  return (
    <Screen>
      <Header>
        <H1 text="settings.title" />
      </Header>
      <Button text="logout" onPress={logout} />
    </Screen>
  );
};
