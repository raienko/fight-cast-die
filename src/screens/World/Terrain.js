import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Terrain({children}) {
  return (
    <View style={styles.wrapper}>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#cfc',
  },
});
