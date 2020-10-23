import React from 'react';
import Screen from 'src/components/Screen';
import Terrain from './Terrain';
import Hud from './Hud';
import Players from './Players';
import ViewPort from './ViewPort';
import Mobs from './Mobs';
import NPCs from './NPCs';
import Objects from './Objects';
import Level from './Level';

export default () => {
  return (
    <Screen>
      <Level>
        <ViewPort>
          <Terrain />
          <Objects />
          <Mobs />
          <NPCs />
          <Players />
        </ViewPort>
        <Hud />
      </Level>
    </Screen>
  );
};
