import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';

export default function Terrain({children}) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.background}
        resizeMode="stretch"
        source={{ uri: 'https://s3.amazonaws.com/texturemax_th/terrain/grass-and-straw-terrain/grass-and-straw-terrain_0057_03_S_enl.jpg' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: rem(960),
    height: rem(960),
  },
});
