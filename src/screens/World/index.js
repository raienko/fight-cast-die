import React from 'react';
import Screen from 'src/components/Screen';
import Viewport from 'src/components/Viewport';
import Terrain from './Terrain';
import Hud from './Hud';
import Players from './Players';
import Mobs from './Mobs';
import NPCs from './NPCs';
import Objects from './Objects';
import Level from './Level';
import GridHighlight from './GridHighlight';

export default () => {
  return (
    <Screen>
      <Level>
        <Viewport>
          <Terrain />
          <GridHighlight />
          <Objects />
          <Mobs />
          <NPCs />
          <Players />
        </Viewport>
        <Hud />
      </Level>
    </Screen>
  );
};
