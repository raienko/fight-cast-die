import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'src/components/Button';
import * as characterAction from 'src/stores/character/actions';

export default function Hud({children}) {
  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <Button text="lobby" onPress={characterAction.switchCharacter} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
