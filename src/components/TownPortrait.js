import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import towns from 'src/towns';

export default function TownPortrait({town}) {
  const city = towns.find(i => i.id === town);
  return <Image source={city.portrait} style={styles.portrait} />;
}

const styles = StyleSheet.create({
  portrait: {
    width: rem(46),
    height: rem(30),
  },
});
