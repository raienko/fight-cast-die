import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import colors from 'src/constants/colors';

const assets = {
  [colors.blue]: require('./blue.gif'),
  [colors.green]: require('./green.gif'),
  [colors.orange]: require('./orange.gif'),
  [colors.pink]: require('./pink.gif'),
  [colors.purple]: require('./purple.gif'),
  [colors.red]: require('./red.gif'),
  [colors.tan]: require('./tan.gif'),
  [colors.teal]: require('./teal.gif'),
};

export default function TownPortrait({color = colors.orange}) {
  return <Image source={assets[color]} style={styles.portrait} />;
}

const styles = StyleSheet.create({
  portrait: {
    width: rem(37),
    height: rem(46),
  },
});
