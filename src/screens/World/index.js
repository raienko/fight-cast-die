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
  const currentLevel = levels.forest_0;
  return (
    <Screen>
      <ViewPort>
        <Terrain level={currentLevel} />
        <Objects />
        <Mobs level={currentLevel} />
        <NPCs />
        <Players />
      </ViewPort>
      <Hud />
    </Screen>
  );
};
