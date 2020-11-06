import React from 'react';
import Loading from './Loading';
import Level from './Level';
import Viewport from './Viewport';
import CurrentPlayer from './CurrentPlayer';
import Controller from './Controller';
import Terrain from './Terrain';
import Mobs from './Mobs';
import Players from './Players';
import GridHighlight from './GridHighlight';

export default () => {
  return (
    <Viewport>
      <Loading>
        <Level>
          <Terrain />
          <GridHighlight />
          <Mobs />
          <Players />
          <Controller />
          <CurrentPlayer />
        </Level>
      </Loading>
    </Viewport>
  );
};
