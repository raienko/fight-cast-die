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
const path = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player1 = React.createRef();
const path1 = [{x: 20, y: 70}, {x: 50, y: 50}, {x:250, y: 100}];
const player2 = React.createRef();
const path2 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player3 = React.createRef();
const path3 = [{x: 210, y: 10}, {x: 50, y: 50}, {x:100, y: 600}];
const player4 = React.createRef();
const path4 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player5 = React.createRef();
const path5 = [{x: 10, y: 310}, {x: 150, y: 50}, {x:100, y: 200}];
const player6 = React.createRef();
const path6 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player7 = React.createRef();
const path7 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player8 = React.createRef();
const path8 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];
const player9 = React.createRef();
const path9 = [{x: 10, y: 10}, {x: 50, y: 50}, {x:100, y: 200}];

export default () => {
  const level = levels.forest_1;
  React.useEffect(() => {
    setTimeout(async () => {
      player.current.follow(path);
      player1.current.follow(path1);
      player2.current.follow(path2);
      player3.current.follow(path3);
      player4.current.follow(path4);
      player5.current.follow(path5);
      player6.current.follow(path6);
      player7.current.follow(path7);
      player8.current.follow(path8);
      player9.current.follow(path9);
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
          <Character ref={player1} />
          <Character ref={player2} />
          <Character ref={player3} />
          <Character ref={player4} />
          <Character ref={player5} />
          <Character ref={player6} />
          <Character ref={player7} />
          <Character ref={player8} />
          <Character ref={player9} />
        </Viewport>
        <Hud />
      </Canvas>
    </Screen>
  );
};
