import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import {cellSize} from 'src/constants';
import {useCharacter} from './Character';

export default function Player() {
  const {character} = useCharacter();
  return (
    <Animated.View style={styles.wrapper}>
      <Text value={character.name} style={styles.name} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: cellSize,
    height: cellSize,
    position: 'absolute',
    borderRadius: cellSize / 2,
    backgroundColor: 'green',
    top: 5 * cellSize,
    left: 5 & cellSize,
  },
  name: {
    color: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: -cellSize / 2,
    width: cellSize * 2,
    textAlign: 'center',
  },
});
