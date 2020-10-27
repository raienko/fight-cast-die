import React from 'react';
import Loading from './Loading';
import Level from './Level';
import Viewport from './Viewport';
import Character from './Character';
import Controller from './Controller';
import Terrain from './Terrain';
import Mobs from './Mobs';

export default () => {
  return (
    <Character>
      <Viewport>
        <Loading>
          <Level>
            <Terrain />
            <Mobs />
            <Controller />
          </Level>
        </Loading>
      </Viewport>
    </Character>
  );
};
