import React from 'react';
import Viewport from './Viewport';
import Character from './CurrentPlayer';
import Terrain from './Terrain';
import Mobs from './Mobs';
import Level from './Level';
import EventBus from './EventBus';
import Players from './Players';
import ExplorationController from './ExplorationController';
import GridHighlight from './GridHighlight';

export default () => {
  return (
    <Viewport>
      <EventBus>
        <Level>
          <Terrain />
          <GridHighlight />
          <Mobs />
          <Players />
          <Character />
          <ExplorationController />
        </Level>
      </EventBus>
    </Viewport>
  );
};
