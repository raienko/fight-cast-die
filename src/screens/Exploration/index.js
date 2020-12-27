import React from 'react';
import Touchable from 'rn-units/components/Touchable';
import navigation from 'src/navigation';
import Icon from 'src/components/Icon';
import levels from 'src/levels';
import Screen from 'src/components/Screen';
import Header from 'src/components/Header';
import * as gameActions from 'src/store/game/actions';
import BackBtn from 'src/components/BackBtn';
import H1 from 'src/components/H1';
import Canvas from './Canvas';
import Viewport from './Viewport';
import Board from './Board';
import Mobs from './Mobs';
import Hud from './Hud';

export default () => {
  const level = levels.forest_1;
  return (
    <Screen>
      <Header>
        <BackBtn onPress={gameActions.leaveGame} />
        <H1 text="exploration" />
        <Touchable onPress={() => navigation.navigate('Settings')}>
          <Icon font={Icon.fonts.AntDesign} name="setting" />
        </Touchable>
      </Header>
      <Canvas>
        <Viewport>
          <Board tilemap={level.tilemap} background={level.background} />
          <Mobs mobsmap={level.mobsmap} />
        </Viewport>
        <Hud />
      </Canvas>
    </Screen>
  );
};
