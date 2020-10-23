import React from 'react';
import Navigation from 'src/screens/Navigation';
import Store from 'src/store';
import User from 'src/user';
import GameMaster from 'src/gameMaster';

export default class extends React.Component {
  render() {
    return (
      <Store>
        <User>
          <GameMaster>
            <Navigation />
          </GameMaster>
        </User>
      </Store>
    );
  }
}
