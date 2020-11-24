import React from 'react';
import levels from 'src/levels';
import Canvas from './Canvas';
import Viewport from './Viewport';
import Board from './Board';
import Mobs from './Mobs';
import Hud from './Hud';

export default () => {
  const level = levels.forest_1;
  return (
    <Canvas>
      <Viewport>
        <Board
          tilemap={level.tilemap}
          background={level.background}
        />
        <Mobs mobsmap={level.mobsmap} />
      </Viewport>
      <Hud />
    </Canvas>
  );
};
