import React from 'react';
import Screen from 'src/components/Screen';
import * as levels from 'src/levels';
import Terrain from './Terrain';
import Hud from './Hud';
import Players from './Players';
import ViewPort from './ViewPort';
import Mobs from './Mobs';
import NPCs from './NPCs';
import Objects from './Objects';

export default () => {
  return (
    <Screen>
      <ViewPort>
        <Terrain level={levels.forest_0} />
        <Objects />
        <Mobs />
        <NPCs />
        <Players />
      </ViewPort>
      <Hud />
    </Screen>
  );
};
