import React, {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PlayerModel from 'src/models/Player';
import Player from './Player';
import {cellSize} from 'src/constants';
import AnimatedPosition from 'src/models/AnimatedPosition';
import Pathfinder from 'src/utils/Pathfinder';
import {useLevel} from './Level';

const fakePlayers = [
  new PlayerModel('player_0', 'Johny', {x: 0, y: 22}),
  new PlayerModel('player_1', 'Ive', {x: 5, y: 3}),
  new PlayerModel('player_2', 'Spartak', {x: 2, y: 2}),
];

export default () => {
  const [players, setPlayers] = useState([]);
  const [moving, setMoving] = useState([]);
  const positions = useRef({}).current;
  const {level} = useLevel();
  const pathFinder = useRef(new Pathfinder()).current;
  const navigation = useNavigation();

  const fetchPlayers = async () => {
    // do server request
    const playersFromServer = fakePlayers;
    playersFromServer.forEach((player) => {
      const {x, y} = player.position;
      positions[player.id] = new AnimatedPosition(x, y);
    });
    setPlayers(playersFromServer);
  };

  const movePlayer = async (id, path) => {
    const exists = players.find((i) => i.id === id);
    if (!exists) {
      throw new Error(`${id} not found`);
    }

    handlePlayerMoving(id, true);

    return positions[id]
      .move(path, 1)
      .finally(() => handlePlayerMoving(id, false));
  };

  useEffect(() => {
    pathFinder.setup(level.tilemap);
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (players.length) {
      const player = players[0];
      const path = pathFinder.findPath(
        player.position.x,
        player.position.y,
        15,
        29,
      );
      movePlayer(player.id, path);
    }
  }, [players]);

  const handlePlayerMoving = (id, value) => {
    const isMoving = moving.includes(id);
    if (value && isMoving) {
      return;
    }

    if (value && !isMoving) {
      return setMoving(moving.concat(id));
    }

    return setMoving(moving.filter(i => i !== id));
  };

  const handlePlayerPressed = () => {

  };

  const renderPlayer = (player) => {
    const offset = {transform: positions[player.id].offset};
    const isMoving = moving.includes(player.id);
    return (
      <Animated.View style={[styles.container, offset]} key={player.id}>
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
