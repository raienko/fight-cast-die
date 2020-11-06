import React, {useRef, useState, useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';
import PlayerModel from 'src/models/Player';
import {cellSize} from 'src/constants';
import AnimatedPosition from 'src/models/AnimatedPosition';
import Pathfinder from 'src/utils/Pathfinder';
import {useLevel} from 'src/screens/Exploration/Level';
import Player from './Player';

const fakePlayer = new PlayerModel('current_player', 'Current Player', {x: 5, y: 5}, 1);

export default () => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  let position = useRef(new AnimatedPosition(0, 0)).current;
  const {level} = useLevel();
  const pathFinder = useRef(new Pathfinder()).current;

  const fetchCurrentPlayer = async () => {
    // do server request
    const player = fakePlayer;
    setCurrentPlayer(player);
    position = new AnimatedPosition(player.position.x, player.position.y);
    const path = pathFinder.findPath(player.position.x, player.position.y, 10, 10);
    move(path);
  };

  const move = async (path) => {
    return position.move(path, currentPlayer.speed);
  };

  useEffect(() => {
    fetchCurrentPlayer();
  }, []);

  useEffect(() => {
    if (level) {
      pathFinder.setup(level.tilemap);
    }
  }, [level]);

  if (!currentPlayer) {
    return null;
  }

  const offset = {transform: currentPlayer.offset};
  return (
    <Animated.View style={[styles.container, offset]}>
      <Player player={currentPlayer} />
    </Animated.View>
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
