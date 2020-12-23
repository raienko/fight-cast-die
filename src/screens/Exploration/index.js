import React from 'react';
import levels from 'src/levels';
import Screen from 'src/components/Screen';
import Canvas from './Canvas';
import Viewport from './Viewport';
import Board from './Board';
import Mobs from './Mobs';
import Hud from './Hud';
import Header from './Header';
import Footer from './Footer';
import {leaveGame} from 'src/stores/game/actions';
import BackBtn from 'src/components/BackBtn';

export default () => {
  const level = levels.forest_1;
  return (
    <Screen>
      <Header>
        <BackBtn onPress={leaveGame} />
      </Header>
      <Canvas>
        <Viewport>
          <Board tilemap={level.tilemap} background={level.background} />
          <Mobs mobsmap={level.mobsmap} />
        </Viewport>
        <Hud />
      </Canvas>
      <Footer />
    </Screen>
  );
};
