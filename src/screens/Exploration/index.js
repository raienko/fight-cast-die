import React from 'react';
import navigation from 'src/navigation';
import levels from 'src/levels';
import Screen from 'src/components/Screen';
import Header from 'src/components/Header';
import * as gameActions from 'src/store/game/actions';
import BackBtn from 'src/components/BackBtn';
import H1 from 'src/components/H1';
import SettingsBtn from 'src/components/SettingsBtn';
import Canvas from './Canvas';
import Viewport from './Viewport';
import Board from './Board';
import Mobs from './Mobs';
import Hud from './Hud';
import Character from 'src/components/Character';

const player = React.createRef();

export default () => {
  const level = levels.forest_1;
  React.useEffect(() => {
    setTimeout(async () => {
      await player.current.rotate(-50, 100);
      await player.current.move({x: 100, y: 100}, 100);
      await player.current.follow([
        {x: 100, y: 100},
        {x: 200, y: 200},
        {x: 300, y: 300},
        {x: 200, y: 400},
        {x: 100, y: 300},
        {x: 200, y: 200},
        {x: 200, y: 100},
      ]);
    }, 1000);
  }, []);

  return (
    <Screen>
      <Header>
        <BackBtn onPress={gameActions.leaveGame} />
        <H1 text="exploration" />
        <SettingsBtn onPress={() => navigation.navigate('Settings')} />
      </Header>
      <Canvas>
        <Viewport>
          <Board tilemap={level.tilemap} background={level.background} />
          <Mobs mobsmap={level.mobsmap} />
          <Character ref={player} />
        </Viewport>
        <Hud />
      </Canvas>
    </Screen>
  );
};
