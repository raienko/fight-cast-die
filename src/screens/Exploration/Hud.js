import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Hud() {
  return (
    <View style={styles.wrapper} pointerEvents="box-none">

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
