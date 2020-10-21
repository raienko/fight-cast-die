import React from 'react';
import Screen from 'src/components/Screen';
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
        <Terrain />
        <Objects />
        <Mobs />
        <NPCs />
        <Players />
      </ViewPort>
      <Hud />
    </Screen>
  );
};
