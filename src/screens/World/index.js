import React from 'react';
import Screen from 'src/components/Screen';
import Terrain from './Terrain';
import Hud from './Hud';
import PlayersController from './PlayersController';
import ViewPort from './ViewPort';

export default () => {
  return (
    <Screen>
      <ViewPort>
        <Terrain />
        <PlayersController />
      </ViewPort>
      <Hud />
    </Screen>
  );
};
