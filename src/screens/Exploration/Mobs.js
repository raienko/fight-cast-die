import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {cellSize} from 'src/constants';
import mobs from 'src/mobs';
import {useLevel} from './Level';

export default function Mobs() {
  const {level} = useLevel();
  if (!level) {
    return null;
  }

  return level.mobsmap.map((mob, index) => {
    const position = {
      left: mob.x * cellSize,
      top: mob.y * cellSize,
    };

    const mobInfo = mobs[mob.type];

    return (
      <View key={`${index}`} style={[styles.wrapper, position]}>
        <Image
          style={styles.tile}
          source={mobInfo.tile}
          resizeMode="contain"
        />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
  },
  tile: {
    width: cellSize * 2,
    height: cellSize * 2,
    transform: [
      { translateX: -cellSize / 2 },
      { translateY: -cellSize / 2 },
    ],
  },
});
