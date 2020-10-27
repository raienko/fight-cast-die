import React from 'react';
import Loading from './Loading';
import Level from './Level';
import Viewport from './Viewport';
import Character from './Character';
import Controller from './Controller';
import Terrain from './Terrain';
import Mobs from './Mobs';
import Player from './Player';

export default () => {
  return (
    <Character>
      <Viewport>
        <Loading>
          <Level>
            <Terrain />
            <Mobs />
            <Player />
            <Controller />
          </Level>
        </Loading>
      </Viewport>
    </Character>
  );
};
