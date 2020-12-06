import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import towns from 'src/constants/towns';

const assets = {
  [towns.castle]: require('./castle.gif'),
  [towns.conflux]: require('./conflux.gif'),
  [towns.cove]: require('./cove.gif'),
  [towns.dungeon]: require('./dungeon.gif'),
  [towns.fortress]: require('./fortress.gif'),
  [towns.inferno]: require('./inferno.gif'),
  [towns.necropolis]: require('./necropolis.gif'),
  [towns.rampart]: require('./rampart.gif'),
  [towns.stronghold]: require('./stronghold.gif'),
  [towns.tower]: require('./tower.gif'),
};

export default function TownPortrait({town}) {
  return <Image source={assets[town]} style={styles.portrait} />;
}

const styles = StyleSheet.create({
  portrait: {
    width: rem(46),
    height: rem(30),
  },
});
