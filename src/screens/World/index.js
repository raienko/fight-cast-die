import React from 'react';
import {View, StyleSheet} from 'react-native';
import Terrain from './Terrain';
import Hud from './Hud';
import PlayersController from './PlayersController';

export default () => {
  return (
    <View style={styles.wrapper}>
      <Terrain />
      <PlayersController />
      <Hud />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
