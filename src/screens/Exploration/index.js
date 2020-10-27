import React from 'react';
import Loading from './Loading';
import Level from './Level';
import ViewPort from './ViewPort';
import Character from './Character';
import Controller from './Controller';
import Terrain from './Terrain';
import Mobs from './Mobs';

export default () => {
  return (
    <ViewPort>
      <Loading>
        <Level>
          <Terrain />
          <Mobs />
          <Character>
            <Controller />
          </Character>
        </Level>
      </Loading>
    </ViewPort>
  );
};
