import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import towns from 'src/towns';

export default function TownPortrait({town}) {
  const city = towns.find((i) => i.id === town);
  return <Image source={city.portrait} style={styles.portrait} />;
}

const width = rem(46);
const height = width * 0.65;

const styles = StyleSheet.create({
  portrait: {
    width,
    height,
  },
});
