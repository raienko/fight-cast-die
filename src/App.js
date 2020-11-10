import React from 'react';
import Navigation from 'src/screens/Navigation';
import Store from 'src/store';
import User from 'src/user';
import GameMaster from 'src/gameMaster';
import Exploration from 'src/screens/Exploration';

export default class extends React.Component {
  render() {
    return (
      <Store.RehydratableProvider>
        <Exploration />
        {/*<User>*/}
        {/*  <GameMaster>*/}
        {/*    <Navigation />*/}
        {/*  </GameMaster>*/}
        {/*</User>*/}
      </Store.RehydratableProvider>
    );
  }
}
