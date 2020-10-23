import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import {cellSize} from 'src/constants';

export const playerTileSize = cellSize;

export default ({name, isMoving}) => {
  return (
    <View style={[styles.wrapper, isMoving && styles.moving]}>
      <Text value={name} style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: playerTileSize,
    height: playerTileSize,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderWidth: 1,
    borderRadius: playerTileSize / 2,
    backgroundColor: '#ecb508',
  },
  title: {
    position: 'absolute',
    width: cellSize * 2,
    textAlign: 'center',
    top: -20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#00aeff',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  moving: {
    backgroundColor: '#acf583',
  },
});
