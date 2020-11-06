import React, {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';
import PlayerModel from 'src/models/Player';
import Player from './Player';
import {cellSize} from 'src/constants';
import AnimatedPosition from 'src/models/AnimatedPosition';
import Pathfinder from 'src/utils/Pathfinder';
import {useLevel} from './Level';

const fakePlayers = [
  new PlayerModel('player_0', 'Avengo', {x: 5, y: 12}, 1),
  new PlayerModel('player_1', 'Ive', {x: 5, y: 3}, 1),
  new PlayerModel('player_2', 'Spartak', {x: 2, y: 2}, 1),
];

export default () => {
  const [players, setPlayers] = useState([]);
  const positions = useRef({}).current;
  const {level} = useLevel();
  const pathFinder = useRef(new Pathfinder()).current;

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
    const player = players.find((i) => i.id === id);
    if (!player) {
      throw new Error(`${id} not found`);
    }

    return positions[id].move(path, player.speed);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (level) {
      pathFinder.setup(level.tilemap);
    }
  }, [level]);

  useEffect(() => {
    if (!players.length || !level) {
      return;
    }

    players.map((player, index) => {
      const {x, y} = player.position;
      const path = pathFinder.findPath(x, y, index * 5, index * 5);
      movePlayer(player.id, path);
    });
  }, [players, level]);

  const renderPlayer = (player) => {
    const offset = {transform: positions[player.id].offset};
    return (
      <Animated.View style={[styles.container, offset]} key={player.id}>
        <Player player={player} />
      </Animated.View>
    );
  };

  return players.map(renderPlayer);
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
