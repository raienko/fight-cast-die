import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';

export const playerTileSize = rem(50);

export default ({name, isMoving}) => {
  return (
    <View style={[styles.wrapper, isMoving && styles.moving]}>
      <Text value={name} />
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
  },
  moving: {
    backgroundColor: '#ccc',
  },
});
