import React, {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet, Easing, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PlayerModel from 'src/models/Player';
import Position from 'src/models/Position';
import Player from './Player';
import {cellSize} from 'src/constants';

const fakePlayers = [
  new PlayerModel('player_0', 'Johny', {x: 0, y: 5}),
  new PlayerModel('player_1', 'Ive', {x: 5, y: 3}),
  new PlayerModel('player_2', 'Spartak', {x: 2, y: 2}),
];

export default () => {
  const [players, setPlayers] = useState([]);
  const [moving, setMoving] = useState([]);
  const positions = useRef({}).current;
  const movements = useRef({}).current;
  const navigation = useNavigation();

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
      movePlayer(players[0].id, [{x: 10, y: 10},{x: 12, y: 28},{x: 12, y: 15}]);
      setTimeout(() => {
        movePlayer(players[0].id, [{x: 13, y: 13},{x: 12, y: 12},{x: 11, y: 11}]);
      }, 5000);
    }
  }, [players]);

  const handlePlayerPressed = () => {
    console.warn('HER');
    return navigation.navigate('Settings');
  };

  const renderPlayer = (player) => {
    const position = {transform: positions[player.id].getTranslateTransform()};
    const isMoving = moving.includes(player.id);
    return (
      <Animated.View style={[styles.container, position]} key={player.id}>
        <TouchableOpacity onPress={handlePlayerPressed}>
          <Player name={player.name} isMoving={isMoving} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <>
      {
        players.map(renderPlayer)
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: cellSize,
    width: cellSize,
  },
});
