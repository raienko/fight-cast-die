import React, {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet, Easing} from 'react-native';
import PlayerModel from 'src/models/Player';
import Position from 'src/models/Position';
import Player from './Player';

const fakePlayers = [
  new PlayerModel('player_0', 'Johny', {x: 0, y: 200}),
  new PlayerModel('player_1', 'Ive', {x: 100, y: 100}),
  new PlayerModel('player_2', 'Spartak', {x: 200, y: 250}),
];

export default () => {
  const [players, setPlayers] = useState([]);
  const [moving, setMoving] = useState([]);
  const positions = useRef({}).current;
  const movements = useRef({}).current;

  const fetchPlayers = async () => {
    // do server request
    const playersFromServer = fakePlayers;
    playersFromServer.forEach((player) => {
      const position = new Position(player.position.x, player.position.y);
      positions[player.id] = new Animated.ValueXY(position);
    });
    setPlayers(playersFromServer);
  };

  const movePlayer = (id, path) => {
    const exists = players.find((i) => i.id === id);
    if (!exists) {
      throw new Error(`${id} not found`);
    }

    if (movements[id]) {
      movements[id].stop();
    }

    setMoving(moving.concat(id));

    const currentPosition = positions[id];
    const steps = path.map((point) => Animated
      .timing(currentPosition, {
        toValue: new Position(point.x, point.y),
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    movements[id] = Animated.sequence(steps);
    movements[id].start(() => {
      setMoving(moving.filter(i => i !== id));
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (players.length) {
      movePlayer(players[0].id, [{x: 100, y: 100},{x: 150, y: 150},{x: 200, y: 300}]);
      setTimeout(() => {
        movePlayer(players[0].id, [{x: 100, y: 100},{x: 150, y: 150},{x: 200, y: 300}]);
      }, 5000);
    }
  }, [players]);

  const renderPlayer = (player) => {
    const position = {transform: positions[player.id].getTranslateTransform()};
    const isMoving = moving.includes(player.id);
    return (
      <Animated.View style={[styles.container, position]} key={player.id}>
        <Player name={player.name} isMoving={isMoving} />
      </Animated.View>
    );
  };

  return (
    <>{players.map(renderPlayer)}</>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
